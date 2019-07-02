<template>
  <div class="about" style="background-color:pink">
    <h1>This is an about page</h1>
    <AktInput label="Label"></AktInput>
    <akt-checkbox name="test" @change.native="e => onChange(e)" :checked="test" label="Label Checkbox">yay</akt-checkbox>
  </div>
</template>

<script>
// @ is an alias to /src
import AktInput from '@/oms/components/AktInput/AktInput.vue'
import AktCheckbox from '@/oms/components/AktCheckbox/AktCheckbox.vue'

export default {
  name: 'home',
  components: {
    AktInput, AktCheckbox
  },
  data() {
    return {
      test: true
    }
  },
  method: {
    onChange (e){
      console.log(e.target.checked)
    }
  }
}
</script>
