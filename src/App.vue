<template>
  <v-app>
    <!-- I didn't get to make use of scss so much because I went with pure material design But I guess I would show my strengths in SCSS during the SCSS test. best Regards -->
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
