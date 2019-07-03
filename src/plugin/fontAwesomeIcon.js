import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret, faPlusSquare, faListUl, faArchive, faCalculator,
  faCog, faEdit, faChevronUp, faChevronDown, faChevronLeft,
  faChevronRight, faSearch, faTimes, faInfoCircle, faStore,
  faMoneyBillAlt, faShippingFast, faUsers, faFileAlt, faGlobeAmericas,
  faEllipsisV, faCaretDown, faCaretRight, faAngleRight, faCircle,
  faRandom, faSignOutAlt, faArrowCircleDown
} from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUserSecret, faPlusSquare, faListUl, faArchive,
  faCalculator, faCog, faEdit, faChevronUp, faChevronDown,
  faChevronLeft, faChevronRight, faSearch, faTimes, faInfoCircle,
  faStore, faMoneyBillAlt, faShippingFast, faUsers, faFileAlt,
  faEllipsisV, faCaretDown, faGlobeAmericas, faCaretRight, faAngleRight,
  faCircle, faRandom, faSignOutAlt, faArrowCircleDown
)
library.add(farTrashAlt)

const FontAwesomeIconPlugin = {
  install (Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}

export default FontAwesomeIconPlugin
