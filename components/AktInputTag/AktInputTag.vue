<template>
  <div>
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
    <div class="row pl-3">
      <base-button
        v-for="(item, index) in tags"
        :key="index"
        type="primary"
        class="col-auto mb-2">
        {{ item }}
        <font-awesome-icon
          icon="times"
          @click="removeTag(index)">
        </font-awesome-icon>
      </base-button>
      <akt-input
        class="col pl-0"
        input-group-classes="border-0"
        input-classes="_bg-cl-transparent"
        placeholder="Add new tag"
        @keyup.enter="addTag($event.target.value)"
        @blur="addTag($event.target.value)">
      </akt-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AktInputTag',
  props: {
    required: {
      type: Boolean,
      description: 'Whether input is required (adds an asterix *)'
    },
    label: {
      type: String,
      description: 'Input label (text before input)',
      default: ''
    },
    labelClasses: {
      type: String,
      description: 'Input label css classes',
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addTag (value) {
      if (value) {
        this.$emit('addTag', value.trim())
      }
    },
    removeTag (index) {
      this.$emit('removeTag', index)
    }
  }
}
</script>
