import { storiesOf } from '@storybook/vue'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
// import VueI18n from 'vue-i18n'
import i18n from '@/locale'

import AktSidebarItem from './AktSidebarItem.vue'
// import locale from '../../../locale'

const stories = storiesOf('AktSidebarItem', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

const link =
  { name: 'aktSettingCard.sidebarItem.store', icon: 'store', path: { name: 'setting-store-detail' } }

stories.add('Sidebar Item', () => ({
  components: { AktSidebarItem },
  props: {
    link: {
      default: object('link', link)
    }
  },
  template: `<akt-sidebar-item :link="link"></akt-sidebar-item>`,
  propsDescription: {
    AktSidebarItem: {}
  },
  i18n
}),
{
  info: {
  }
})
