<template>
  <form @submit.prevent="checkFunction">
    <header class="pa-3 pt-0">
      <h3 class="text-center">Add Post</h3>
    </header>
    <v-text-field
      v-model="data.title"
      outlined
      label="Title of story"
      :required="!isEditable"
    ></v-text-field>
    <v-textarea
      outlined
      name="story"
      label="Tell your story"
      v-model="data.body"
      :required="!isEditable"
    ></v-textarea>
    <custom-button :block="true" class="mt-4" :loading="loading" type="submit"
      >Publish your story</custom-button
    >
  </form>
</template>

<script>
import { mapState } from "vuex";
import { PUBLISH_BLOG_POST, EDIT_BLOG_POST } from "@/store/actions.types.js";
import CustomButton from "../CustomButton.vue";
export default {
  data: () => {
    return {
      data: {
        title: "",
        body: "",
      },
      loading: false,
    };
  },
  components: {
    CustomButton,
  },
  computed: {
    ...mapState(["commonData"]),
    isEditable() {
      return this.commonData.edit ? true : false;
    },
  },
  mounted() {
    if (this.isEditable) {
      this.assignVariablesIfEdit();
    }
  },
  methods: {
    checkFunction() {
      this.isEditable ? this.updateStory() : this.publishStory();
    },
    async publishStory() {
      this.loading = true;
      try {
        await this.$store.dispatch(PUBLISH_BLOG_POST, this.data);
      } catch (err) {
        alert(err);
      }
      this.loading = false;
    },
    async updateStory() {
      this.loading = true;
      try {
        await this.$store.dispatch(EDIT_BLOG_POST, this.data);
      } catch (err) {
        alert(err);
      }
      this.loading = false;
    },
    assignVariablesIfEdit() {
      this.data.title = this.commonData.data.title;
      this.data.body = this.commonData.data.body;
    },
  },
};
</script>
