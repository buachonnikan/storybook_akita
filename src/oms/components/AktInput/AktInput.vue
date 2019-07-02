<template>
  <div class="_akt-form-group">
    <slot name="label">
      <label
        v-if="label"
        class="form-control-label"
        :class="labelClasses">
        {{ label }}
        <span
          v-if="required"
          class="text-danger">
          *
        </span>
      </label>
    </slot>
    <div
      class="form-group mb-0 input-group"
      :class="[
        { 'focused': focused },
        { 'has-label': label || $slots.label },
        { 'has-danger': valid === false },
        { '_bd-rd-100': rounded },
        inputGroupClasses
      ]">
      <div
        v-if="addonLeftIcon || $slots.addonLeft"
        class="input-group-prepend">
        <span
          class="input-group-text form-control border-0"
          :class="{
            'is-valid': valid === true,
            'is-invalid': valid === false,
            '_bd-rd-100': rounded,
            '_bg-cl-disabled': disabled
          }"
          :style="{ height: `${calRem(height)}rem` }">
          <slot name="addonLeft">
            <i :class="addonLeftIcon"></i>
          </slot>
        </span>
      </div>
      <slot v-bind="slotData">
        <input
          :value="value"
          v-bind="$attrs"
          class="form-control text-dark border-0"
          :disabled="disabled"
          :class="[
            { 'is-valid': valid === true },
            { 'is-invalid': valid === false },
            { '_bd-rd-100': rounded },
            inputClasses
          ]"
          :style="{ height: `${calRem(height)}rem` }"
          v-on="listeners">
      </slot>
      <div
        v-if="addonRightIcon || $slots.addonRight"
        class="input-group-append">
        <span
          class="input-group-text form-control border-0"
          :class="{
            'is-valid': valid === true,
            'is-invalid': valid === false,
            '_bd-rd-100': rounded,
            '_bg-cl-disabled': disabled
          }"
          :style="{ height: `${calRem(height)}rem` }">
          <slot name="addonRight">
            <i :class="addonRightIcon"></i>
          </slot>
        </span>
      </div>
    </div>
    <slot name="errorMessage">
      <div
        v-if="valid === false && errorMessage"
        class="text-danger invalid-feedback mt-2"
        style="display: block;">
        {{ errorMessage }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'AktInput',
  inheritAttrs: false,
  props: {
    required: {
      type: Boolean,
      description: 'Whether input is required (adds an asterix *)'
    },
    valid: {
      type: Boolean,
      description: 'Whether is valid',
      default: undefined
    },
    label: {
      type: String,
      description: 'Input label (text before input)',
      default: ''
    },
    errorMessage: {
      type: String,
      description: 'Input error message (below input)',
      default: ''
    },
    labelClasses: {
      type: String,
      description: 'Input label css classes',
      default: ''
    },
    inputClasses: {
      type: String,
      description: 'Input css classes',
      default: ''
    },
    inputGroupClasses: {
      type: String,
      description: 'Input group css classes',
      default: ''
    },
    value: {
      type: [String, Number],
      description: 'Input value',
      default: ''
    },
    addonRightIcon: {
      type: String,
      description: 'Addon right icon',
      default: undefined
    },
    addonLeftIcon: {
      type: String,
      description: 'Addon left icon',
      default: undefined
    },
    rounded: {
      type: Boolean,
      description: 'Rounded input',
      default: false
    },
    height: {
      type: Number,
      description: 'Number height in px',
      default: 36
    },
    disabled: {
      type: Boolean,
      description: 'Disabled input',
      default: false
    }
  },
  data () {
    return {
      focused: false
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur
      }
    },
    slotData () {
      return {
        focused: this.focused,
        ...this.listeners
      }
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    },
    onFocus (value) {
      this.focused = true
      this.$emit('focus', value)
    },
    onBlur (value) {
      this.focused = false
      this.$emit('blur', value)
    },
    calRem (value) {
      return value / 16
    }
  }
}
</script>

<style lang="scss" scoped>
._bd-rd-100 {
  border-radius: 6.25rem;
}

._bg-cl-disabled {
  background-color: #e9ecef;
}

.has-success:after, .has-danger:after {
  content: unset !important;
}

.form-group {
  border: 0.0625rem solid $input-border-color;

  &.has-success {
    border-color: $success;
  }

  &.has-danger {
    border-color: $danger;
  }

  &.focused {
    border-color: $input-focus-border-color;
  }
}
.has-danger .form-control::placeholder {
  color: $light;
}

select option {
  color: $black;
}
</style>
