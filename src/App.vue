<template>
  <v-app>
    <top-nav />
    <v-main>
      <router-view />
    </v-main>
    <modals />
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";
import Modals from "./components/modals/Modal";
export default {
  name: "App",
  components: {
    TopNav,
    Modals,
  },
};
</script>
