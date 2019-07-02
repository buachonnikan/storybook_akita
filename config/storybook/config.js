import { configure } from '@storybook/vue'
import '@/oms/scss/argon/argon.scss'
import '@/oms/scss/akita/main.scss'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)
// automatically import all files ending in *.stories.js
const req = require.context('@/oms/components', true, /\.stories\.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
