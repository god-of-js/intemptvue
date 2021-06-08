<template>
  <div class="pa-4 pr-0">
    <h2>{{ comment.name }}</h2>
    <span>{{ comment.email }}</span>
    <p>{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
