<template>
  <v-card class="post ma-3">
    <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title v-text="post.title" />
    <v-card-text v-text="post.body" />
    <router-link
      :to="{ name: 'Post', params: { id: post.id } }"
      class="no-link"
    >
      <custom-button v-text="'View Story'" class="ma-3 card-btn" :text="true" />
    </router-link>
  </v-card>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  components: {
    CustomButton,
  },
};
</script>

<style lang="scss" scoped>
.no-link {
  text-decoration: none;
}
.post {
  height: 100%;
  position: relative;
}
.card-btn {
  position: absolute;
  bottom: 0;
  margin-top: 15px;
}
</style>
