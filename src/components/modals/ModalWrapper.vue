<template>
  <v-dialog
    id="modal"
    v-model="dialog"
    :fullscreen="fullscreen"
    max-width="400"
    overlay-color="rgba(55, 71, 79, 0.2)"
    overlay-opacity=".82"
    :retain-focus="false"
    scrollable
  >
    <slot />
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
import { SET_ACTIVE_MODAL } from "@/store/mutations.types";
export default {
  name: "ModalWrapper",
  computed: {
    ...mapState(["isModalActive"]),
    dialog: {
      get() {
        return this.isModalActive;
      },
      set() {
        this.$store.commit(SET_ACTIVE_MODAL, {});
      },
    },
    fullscreen() {
      return this.$vuetify.breakpoint.width <= 768;
    },
  },
};
</script>
