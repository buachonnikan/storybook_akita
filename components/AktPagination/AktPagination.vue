<template>
  <ul
    class="pagination m-0"
    :class="[size && `pagination-${size}`, align && `justify-content-${align}`]">
    <li
      class="page-item prev-page"
      :class="disableOnClick(null, 'left')">
      <a
        class="page-link"
        aria-label="Previous"
        @click="prevPage">
        <span aria-hidden="true">
          <font-awesome-icon
            icon="chevron-left"
            class="text-secondary">
          </font-awesome-icon>
        </span>
      </a>
    </li>
    <li
      v-for="item in range(minPage, maxPage)"
      :key="item"
      class="page-item"
      :class="disableOnClick(item, 'pageList')">
      <a
        class="page-link"
        @click="changePage(item)">
        {{ item }}
      </a>
    </li>
    <li
      class="page-item next-page"
      :class="disableOnClick(null, 'right')">
      <a
        class="page-link"
        aria-label="Next"
        @click="nextPage">
        <span aria-hidden="true">
          <font-awesome-icon
            icon="chevron-right"
            class="text-secondary">
          </font-awesome-icon>
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AktPagination',
  props: {
    pageCount: {
      type: Number,
      default: 0,
      description:
        'Pagination page count. This should be specified in combination with perPage'
    },
    perPage: {
      type: Number,
      default: 100,
      description:
        'Pagination per page. Should be specified with total or pageCount'
    },
    total: {
      type: Number,
      default: 0,
      description:
        'Can be specified instead of pageCount. The page count in this case will be total/perPage'
    },
    value: {
      type: Number,
      default: 1,
      description: 'Pagination value'
    },
    size: {
      type: String,
      default: '',
      description: 'Pagination size'
    },
    align: {
      type: String,
      default: '',
      description: 'Pagination alignment (e.g center|start|end)'
    }
  },
  data () {
    return {
      defaultPagesToDisplay: 5
    }
  },
  computed: {
    totalPages () {
      // if (this.pageCount > 0) return this.pageCount
      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage)
      }
      return 1
    },
    pagesToDisplay () {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages
      }
      return this.defaultPagesToDisplay
    },
    minPage () {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2)
        const newMaxPage = pagesToAdd + this.value
        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1
        }
        return this.value - pagesToAdd
      }
      return 1
    },
    maxPage () {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2)
        const newMaxPage = pagesToAdd + this.value
        if (newMaxPage < this.totalPages) {
          return newMaxPage
        }
        return this.totalPages
      }
      return this.pagesToDisplay
    }
  },
  methods: {
    range (min, max) {
      const arr = []
      for (let i = min; i <= max; i += 1) {
        arr.push(i)
      }
      return arr
    },
    changePage (item) {
      this.$emit('input', item)
    },
    nextPage () {
      if (this.value < this.totalPages) {
        this.$emit('input', this.value + 1)
      }
    },
    prevPage () {
      if (this.value > 1) {
        this.$emit('input', this.value - 1)
      }
    },
    disableOnClick (item, type) {
      if (item) {
        if (this.value === item) {
          return 'active'
        }
        return '_cs-pointer'
      }
      if ((type === 'left' && this.value === 1) || (type === 'right' && this.value === this.totalPages)) {
        return 'disabled'
      }
      return '_cs-pointer'
    }
  }
}
</script>
