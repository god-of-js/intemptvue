<template>
  <modal-wrapper>
    <v-card class="pa-4">
      <div class="d-flex justify-end">
        <custom-button :text="true" :icon="true" @click.native="closeModal"
          ><v-icon>mdi-close</v-icon>
        </custom-button>
      </div>
      <!-- dynamically placing modal components once they are requested from the application -->
      <component :is="activeModal" />
    </v-card>
  </modal-wrapper>
</template>

<script>
import { mapState } from "vuex";
import { SET_ACTIVE_MODAL } from "@/store/mutations.types";
import ModalWrapper from "./ModalWrapper.vue";
import Modals from "./Modals";
import CustomButton from "../CustomButton";
export default {
  computed: {
    ...mapState(["activeModal"]),
  },
  components: {
    ModalWrapper,
    ...Modals,
    CustomButton,
  },
  methods: {
    closeModal() {
      this.$store.commit(SET_ACTIVE_MODAL, {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
