<template>
  <div class="about" style="background-color:pink">
    <h1>This is an about page</h1>
    <AktInput label="Label"></AktInput>
    <!-- <akt-checkbox name="test" @change.native="e => onChange(e)" :checked="test" label="Label Checkbox">yay</akt-checkbox> -->
    <akt-pagination
      :perPage="perPage"
      :total="total"
      :value="value"
      @input="onChangePage">
    </akt-pagination>
    <select-option
    :options="branches"
    placeholder="SELECT"
    @change="onChangeBranch"
    ></select-option>
  </div>
</template>

<script>
// @ is an alias to /src
import AktInput from '@akita_component/akt-input/AktInput.vue'
import AktPagination from '@akita_component/akt-pagination/AktPagination.vue'
import SelectOption from '../../components/SelectOption/SelectOption.vue'

export default {
  name: 'about',
  components: {
    AktInput,
    AktPagination,
    SelectOption
  },
  data () {
    return {
      test: true,
      value: 1,
      total: 10,
      perPage: 1,
      branches: [{ name: 'Option1' }, { name: 'Option2' }]
    }
  },
  methods: {
    onChange (e) {
      console.log(e.target.checked)
    },
    onChangePage (page) {
      this.value = page
      console.log(page)
    },
    onChangeBranch (option) {
      this.value = option
      console.log(option)
    }
  }
}
</script>
