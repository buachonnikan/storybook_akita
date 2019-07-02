<template>
  <div>
    <span
      v-for="(option, index) in options"
      :key="index">
      <span
        v-if="index > 0 && option"
        class="text-primary">
        •
      </span>
      {{ option }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AktVariantOption',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>
