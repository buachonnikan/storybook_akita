<template>
  <div class="about" style="background-color:pink">
    <h1>This is an about page</h1>
    <AktInput label="Label"></AktInput>
    <!-- <akt-checkbox name="test" @change.native="e => onChange(e)" :checked="test" label="Label Checkbox">yay</akt-checkbox> -->
    <akt-pagination
      :perPage="perPage"
      :total="total"
      :value="value"
      @ttt="onChangePage">
    </akt-pagination>
  </div>
</template>

<script>
// @ is an alias to /src
import AktInput from '@/oms/components/AktInput/AktInput.vue'
import AktPagination from '@/oms/components/AktPagination/AktPagination.vue'

export default {
  name: 'about',
  components: {
    AktInput,
    AktPagination
  },
  data () {
    return {
      test: true,
      value: 1,
      total: 10,
      perPage: 1
    }
  },
  methods: {
    onChange (e) {
      console.log(e.target.checked)
    },
    onChangePage (page) {
      this.value = page
      console.log(page)
    }
  }
}
</script>
