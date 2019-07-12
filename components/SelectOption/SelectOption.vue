<template>
    <div class="wrap">
        <span aria-hidden="true">
            <font-awesome-icon
                icon="caret-down"
                class="arrow">
            </font-awesome-icon>
        </span>
        <select
        name="branch"
        class="form-control border-0 dropdown"
        @change="onChangeBranch">
            <option
                value=""
                disabled
                selected>
                {{placeholder}}
            </option>
            <option v-for="(item, index) of options"
                :key="index"
                :value="item"
                >
                {{ item.name }}
            </option>
        </select>
    </div>
</template>

<script>
// import AktInput from '@akita_component/akt-input/AktInput.vue'
export default {
  name: 'SelectOption',
  props: {
    placeholder: {
      type: String,
      default: 'select'
    },
    options: {
      type: [Array, Object]
    },
    branch: {
      type: String,
      default: 'branch'
    }
  },
  methods: {
    onChangeBranch (option) {
      this.value = option
      console.log(option)
    }
  }
}
</script>

<style lang="css" scoped>
    .dropdown{
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }
    .wrap{
        position: relative;
    }
    .arrow{
        position: absolute;
        transform: translate(-50%,-50%);
        top:50%;
        right:19px;
        z-index: 1;
        color: #C4C4C4;
    }
    .option{
        height: 100px;
        border:3px solid black;
        padding: 8px 16px;
    }
</style>
>
