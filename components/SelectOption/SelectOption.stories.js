import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import SelectOption from './SelectOption.vue'

const stories = storiesOf('Select Option', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Select Option', () => ({
  components: { SelectOption },
  props: {
    placeholder: {
      default: text('placeholder', 'select')
    }
  },
  template: `
  <select-option
  :options="branches"
  :placeholder="placeholder"></select-option>`,
  propsDescription: {
    SelectOption: {
    }
  },
  data () {
    return {
      branches: [
        { name: 'Option1' },
        { name: 'Option2' },
        { name: 'Optoin3' }
      ]
    }
  }
}),
{
  info: {
  }
})
