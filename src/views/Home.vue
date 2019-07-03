<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <akt-pagination :perPage="perPage" :total="total" :value="value" @change="onChangePage"></akt-pagination> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import AktPagination from '@/oms/components/AktPagination/AktPagination.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    // AktPagination
  },
  data () {
    return {
      test: true,
      value: 1,
      total: 10,
      perPage: 1
    }
  }
}
</script>
