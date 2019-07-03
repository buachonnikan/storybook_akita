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
      class="custom-control custom-checkbox"
      :class="[{disabled: disabled}, inlineClass]">
      <input
        :id="cbId"
        v-model="model"
        class="custom-control-input"
        type="checkbox"
        :disabled="disabled" />
      <label
        :for="cbId"
        class="custom-control-label">
        <slot>
          <span
            v-if="inline">
            &nbsp;
          </span>
        </slot>
      </label>
    </div>
  </div>
</template>

<script>
// import { randomString } from '@/baseComponents/stringUtils'

export default {
  name: 'AktCheckbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: {
      type: [Array, Boolean],
      default: false,
      description: 'Whether checkbox is checked'
    },
    disabled: {
      type: Boolean,
      description: 'Whether checkbox is disabled'
    },
    inline: {
      type: Boolean,
      description: 'Whether checkbox is inline'
    },
    label: {
      type: String,
      description: 'Input label (text before check box)',
      default: ''
    },
    labelClasses: {
      type: String,
      description: 'Input label css classes',
      default: ''
    },
    required: {
      type: Boolean,
      description: 'Whether input is required (adds an asterix *)'
    }
  },
  data () {
    return {
      cbId: '',
      touched: false
    }
  },
  computed: {
    model: {
      get () {
        return this.checked
      },
      set (check) {
        if (!this.touched) {
          this.touched = true
        }
        this.$emit('input', check)
      }
    },
    inlineClass () {
      if (this.inline) {
        return 'form-check-inline'
      }
      return ''
    }
  },
  mounted () {
    this.cbId = 'test'
  }
}
</script>
