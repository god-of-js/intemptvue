<template>
  <!-- The naming convention with an underscore at the front is to alert that this is a file that makes use of a dynamic ID -->
  <div class="post">
    <v-col cols="12" lg="6" class="mx-auto">
      <header>
        <v-img
          height="200"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
      </header>
      <div class="actions d-flex justify-end">
        <custom-button
          v-text="'Update Story'"
          class="ma-3"
          :text="true"
          color="warning"
          @click.native="updateStory"
        />
        <custom-button
          class="ma-3 mr-0"
          color="error"
          :text="true"
          @click.native="deleteStory"
          :loading="loading"
        >
          Delete Story</custom-button
        >
      </div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>

      <comment
        v-for="(comment, index) in comments"
        :key="index"
        :comment="comment"
      />
    </v-col>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  GET_BLOG_POST,
  DELETE_BLOG_POST,
  GET_COMMENTS,
} from "@/store/actions.types";
import { SET_ACTIVE_MODAL, SET_SNACK_BAR } from "@/store/mutations.types";
import CustomButton from "@/components/CustomButton.vue";
import Comment from "@/components/Comment.vue";
let id;
export default {
  name: "Post",
  data: () => {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(["post", "comments"]),
  },
  mounted() {
    id = this.$route.params.id;
    this.$store.dispatch(GET_BLOG_POST);
    this.$store.dispatch(GET_COMMENTS, { id });
  },
  components: {
    CustomButton,
    Comment,
  },
  methods: {
    async deleteStory() {
      this.loading = true;
      // In a normal scenario, a pop up would be here to ask if user is sure but considering the data present is inconsequential and for test purposes, it would be neglected.
      try {
        await this.$store.dispatch(DELETE_BLOG_POST, { id });
      } catch (err) {
        // activating the snackbar component
        this.$store.commit(SET_SNACK_BAR, {
          text: err,
          color: "",
        });
      }
      this.loading = false;
    },
    updateStory() {
      this.$store.commit(SET_ACTIVE_MODAL, {
        activeModal: "AddStory",
        isModalActive: true,
        commonData: { edit: true, data: this.post },
      });
    },
  },
};
</script>
