import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktInput from './AktInput.vue'

const stories = storiesOf('AktInput', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Input', () => ({
  components: { AktInput },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    rounded: {
      default: boolean('rounded', false)
    },
    // value: {
    //   default: text('value(prop)', 'value')
    // },
    height: {
      default: number('height', 36)
    },
    // aktModel: {
    //   default: text('aktModel', 'test')
    // },
    label: {
      default: text('label', 'label')
    }
  },
  template: `
    <akt-input
      v-model="aktModel"
      :label="label" :disabled="disabled"
      :rounded="rounded" :value="value"
      :height="height"
    >
    </akt-input>
  `,
  data () {
    return {
      aktModel: 'test'
    }
  },
  propsDescription: {
    AktInput: {
      valid: 'Whether is valid',
      required: 'Whether input is required (adds an asterix *)',
      label: 'Input label (text before input)',
      errorMessage: 'Input error message (below input)',
      labelClasses: 'Input label css classes',
      inputClasses: 'Input css classes',
      inputGroupClasses: 'Input group css classes',
      value: 'Input value',
      addonRightIcon: 'Addon right icon',
      addonLeftIcon: 'Addont left icon',
      rounded: 'Rounded input',
      height: 'Number height in px',
      disabled: 'Disabled input'
    }
  }
}),
{
  info: {
  }
})
