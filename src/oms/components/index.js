import AktInput from './AktInput'
import AktPagination from './AktPagination'

export default {
  install (Vue) {
    Vue.component(AktInput.name, AktInput)
    Vue.component(AktPagination.name, AktPagination)
  }
}
