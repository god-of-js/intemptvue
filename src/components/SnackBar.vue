<template>
  <v-snackbar v-model="show" dark :color="color">
    {{ message }}
    <v-btn text @click="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { SET_SNACK_BAR } from "@/store/mutations.types";
export default {
  name: "SnackBar",
  data() {
    return {
      show: false,
      message: "",
      color: "",
    };
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === SET_SNACK_BAR) {
        this.message = state.snackBar.text;
        this.color = state.snackBar.color;
        this.show = true;
      }
    });
  },
};
</script>
