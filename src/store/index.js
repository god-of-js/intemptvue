import Vue from "vue";
import Vuex from "vuex";
import api from "@/plugins/api";
// Making use of variables for store names for single source of truth. I only get to change it at one point and it changes everywhere as opposed to changing it everywhere when time for change comes.
import {
  PUBLISH_BLOG_POST,
  GET_BLOG_POST,
  GET_BLOG_POSTS,
  EDIT_BLOG_POST,
  DELETE_BLOG_POST,
  GET_COMMENTS,
} from "./actions.types";
import {
  SET_ACTIVE_MODAL,
  SET_POSTS,
  SET_POST,
  SET_COMMENTS,
  SET_SNACK_BAR,
} from "./mutations.types";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalActive: false,
    activeModal: "",
    posts: [],
    post: {},
    comments: [],
    commonData: {},
    snackBar: {
      color: "",
      text: "",
    },
  },
  mutations: {
    [SET_ACTIVE_MODAL](state, params) {
      state.isModalActive = params.isModalActive || false;
      state.activeModal = params.activeModal || "";
      state.commonData = params.commonData || {};
    },
    [SET_POSTS](state, params) {
      state.posts = params;
    },
    [SET_POST](state, params) {
      state.post = params;
    },
    [SET_COMMENTS](state, params) {
      state.comments = params;
    },
    [SET_SNACK_BAR](state, { text = "", color = "" }) {
      state.snackBar.text = text;
      state.snackBar.color = color;
    },
  },
  actions: {
    async [PUBLISH_BLOG_POST](context, postData) {
      try {
        const apiResponse = await api.post("/posts", postData);
        // activating the snackbar component
        context.commit(SET_SNACK_BAR, {
          text: "Blog Post created successfully.",
          color: "",
        });
        // Resolving to alert component that the process has been completed;
        return Promise.resolve(apiResponse);
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async [EDIT_BLOG_POST](context, postData) {
      try {
        const apiResponse = await api.put(
          `/posts/${context.state.commonData.id}`,
          postData
        );
        context.commit(SET_POST, apiResponse);
        // activating the snackbar component
        context.commit(SET_SNACK_BAR, {
          text: "Blog Post edited successfully.",
          color: "",
        });
        // Resolving to alert component that the process has been completed;
        return Promise.resolve(apiResponse);
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async [DELETE_BLOG_POST](context, { id }) {
      try {
        const apiResponse = await api.delete(`/posts/${id}`);
        // activating the snackbar component
        context.commit(SET_SNACK_BAR, {
          text: "Blog Post deleted successfully.",
          color: "",
        });
        return Promise.resolve(apiResponse);
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async [GET_COMMENTS](context, { id }) {
      const comments = await api.get(`/posts/${id}/comments`);
      context.commit(SET_COMMENTS, comments);
    },
    async [GET_BLOG_POST](context, id) {
      const post = await api.get(`/posts/${id}`);
      context.commit(SET_POST, post);
    },
    async [GET_BLOG_POSTS](context) {
      const posts = await api.get("/posts");
      context.commit(SET_POSTS, posts);
    },
  },
});
