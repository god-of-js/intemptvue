<template>
  <v-app>
    <top-nav />
    <v-main>
      <router-view />
    </v-main>
    <snack-bar />
    <modals />
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";
import Modals from "./components/modals/Modal";
import SnackBar from "./components/SnackBar.vue";
export default {
  name: "App",
  components: {
    TopNav,
    Modals,
    SnackBar,
  },
};
</script>
