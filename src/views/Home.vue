<template>
  <div>
    <div class="action d-flex justify-end pa-3">
      <custom-button @click.native="setModal">Write a story</custom-button>
    </div>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="3"
        v-for="(post, index) in posts"
        :key="index"
      >
        <post :post="post" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { SET_ACTIVE_MODAL } from "@/store/mutations.types";
import { GET_BLOG_POSTS } from "@/store/actions.types";
import CustomButton from "@/components/CustomButton.vue";
import Post from "@/components/Post.vue";
export default {
  name: "Home",
  components: {
    CustomButton,
    Post,
  },
  computed: {
    ...mapState(["posts"]),
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$store.dispatch(GET_BLOG_POSTS);
    },
    setModal() {
      this.$store.commit(SET_ACTIVE_MODAL, {
        activeModal: "AddStory",
        isModalActive: true,
      });
    },
  },
};
</script>
