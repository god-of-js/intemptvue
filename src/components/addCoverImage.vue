<template>
  <fieldset>
    <input
      type="file"
      name="add-cover-image"
      id="add-cover-image"
      accept="image/*"
      @change="sendFile"
      required
    />
  </fieldset>
</template>

<script>
export default {
  name: "AddCoverImage",
  data: () => {
    return {
      image: null,
    };
  },
  methods: {
    sendFile(event) {
      this.$emit("getFile", event.target.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
fieldset {
  border: transparent;
}
</style>
