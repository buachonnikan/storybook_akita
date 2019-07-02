<template>
  <card
    class="border"
    header-classes="py-3 border-white"
    body-classes="overflow-auto p-0">
    <div
      slot="header"
      class="d-flex align-items-center justify-content-between font-weight-bold">
      <span>{{ label }}</span>
      <slot name="right-widget"></slot>
    </div>
    <slot></slot>
    <div
      v-if="$slots.footer"
      slot="footer">
      <slot name="footer"></slot>
    </div>
  </card>
</template>

<script>
export default {
  name: 'AktTableCard',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
