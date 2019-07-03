import { configure } from '@storybook/vue'
import '@/oms/scss/argon/argon.scss'
import '@/oms/scss/akita/main.scss'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
import Plugin from '@/plugin'

Vue.use(VueI18n)
Vue.use(Plugin)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en'
})

// automatically import all files ending in *.stories.js
const req = require.context('@/oms/components', true, /\.stories\.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
