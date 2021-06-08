<template>
  <v-card class="ma-4 pa-4">
    <h2>{{ comment.name }}</h2>
    <span>{{ comment.email }}</span>
    <p>{{ comment.body }}</p>
    <div class="d-flex justify-end">
      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark> mdi-heart </v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark small color="deep-orange">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Comments",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
