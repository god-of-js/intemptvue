<template>
  <v-app-bar app color="primary" dark>
    <img src="../assets/logo.svg" alt="" width="120" />

    <v-spacer></v-spacer>

    <v-btn href="https://www.intempt.com" target="_blank" text>
      <span class="mr-2">Company website</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style lang="scss" scoped></style>
