import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktCheckbox from './AktCheckbox.vue'

const stories = storiesOf('AktCheckbox', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Checkbox', () => ({
  components: { AktCheckbox },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    inline: {
      defualt: boolean('inline', false)
    },
    label: {
      default: text('label', 'label')
    },
    text: {
      default: text('text', 'text')
    },
    checked: {
      default: boolean('checked', false)
    }
  },
  data () {
    return {
      test: true
    }
  },
  template: `<akt-checkbox :checked="checked"
    :disabled="disabled"
    :inline="inline" :label="label"
    >{{text}}</akt-checkbox>`,
  propsDescription: {
    AktCheckbox: {

    }
  }
}),
{
  info: {
  }
})
