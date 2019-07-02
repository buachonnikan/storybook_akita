<template>
  <div
    v-if="isLoading"
    class="overlay position-fixed">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AktOverlay',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>
