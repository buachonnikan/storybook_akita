import { configure } from '@storybook/vue'
import '@/oms/scss/argon/argon.scss'
import '@/oms/scss/akita/main.scss'

// automatically import all files ending in *.stories.js
const req = require.context('@/oms/components', true, /\.stories\.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
