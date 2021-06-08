<template>
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
</template>

<script>
import { mapState } from "vuex";
import { GET_BLOG_POSTS } from "@/store/actions.types";
import Post from "@/components/Post.vue";
export default {
  name: "Home",
  components: {
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
  },
};
</script>
