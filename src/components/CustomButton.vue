<template>
  <v-btn
    :loading="loading"
    :large="large"
    :color="color"
    :block="block"
    :text="text"
    :icon="icon"
    :small="small"
    :type="type"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
