<template>
  <div class="container-fluid">
    <div class="col-12 d-flex justify-content-between align-items-center px-0">
      <slot name="label">
        <span class="font-weight-bold _fs-18">
          {{ label }}
        </span>
      </slot>
      <slot name="right-widget"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AktBody',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
