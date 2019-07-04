<template>
  <li class="nav-item">
    <router-link
      :to="link.path"
      class="nav-link"
      @click.native="linkClick">
      <template>
        <font-awesome-icon
          size="lg"
          class="_w-19"
          :icon="link.icon || ''">
        </font-awesome-icon>
        <span class="text-dark _fs-14 ml-3">
          {{ $t(link.name) }}
        </span>
      </template>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'AktSidebarItem',
  props: {
    link: {
      type: Object,
      default: () => ({
        name: '',
        path: ''
      })
    }
  },
  methods: {
    linkClick () {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
._w-19 {
  width: 1.1875rem;
}
a.router-link-active {
  background-color: rgba(245, 248, 251, 1);
  font-weight: bold;
  border-radius: 0.25rem;
}
a.router-link-active > svg {
  color: $orange;
}
</style>
