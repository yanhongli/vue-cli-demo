<template>
  <div
    style="position: absolute;top: 0;z-index: 1000;background: red;height: 3px;left: 0;transition: width 0.25s ease;"
    :style="style"
  ></div>
</template>

<script>
export default {
  computed: {
    style() {
      return { width: this.$store.getters.GET_PERCENTAGE + "%" };
    }
  }
};
</script>

<style>
</style>