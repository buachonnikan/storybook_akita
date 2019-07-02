<template>
  <div class="about" style="background-color:pink">
    <h1>This is an about page</h1>
    <AktInput label="Label"></AktInput>
  </div>
</template>

<script>
// @ is an alias to /src
import AktInput from '@/oms/components/AktInput/AktInput.vue'

export default {
  name: 'home',
  components: {
    AktInput
  }
}
</script>
