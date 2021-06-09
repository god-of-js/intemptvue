<template>
  <v-app-bar app color="primary" dark>
    <router-link :to="{ name: 'Home' }">
      <v-img src="../assets/logo.svg" alt="" width="120"
    /></router-link>

    <v-spacer></v-spacer>

    <custom-button @click.native="setModal" :text="true" color="">
      Write A Story
    </custom-button>
  </v-app-bar>
</template>

<script>
import { SET_ACTIVE_MODAL } from "@/store/mutations.types";
import CustomButton from "./CustomButton.vue";
export default {
  name: "TopNav",
  components: { CustomButton },
  methods: {
    setModal() {
      this.$store.commit(SET_ACTIVE_MODAL, {
        activeModal: "AddStory",
        isModalActive: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
