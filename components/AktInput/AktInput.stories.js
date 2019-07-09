import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktInput from '@akita_component/akt-input/AktInput.vue'

const aktProp = AktInput.props

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
    value: {
      default: text('value(prop)', 'value')
    },
    height: {
      default: number('height', 36)
    },
    label: {
      default: text('label', 'label')
    }
  },
  template: `
    <akt-input
      :label="label"
      :disabled="disabled"
      :rounded="rounded"
      :value="value"
      :height="height"
      @click="test"
    >
    </akt-input>
  `,
  methods: {
    test (t) {
      for (var i in aktProp) {
        console.log(i + ' description: ' + aktProp[i].description)
      }
    }
  },
  propsDescription: {
    AktInput: {

      // valid: aktProp['valid'].description,
      // required: aktProp['required'].description,
      // label: aktProp['label'].description,
      // errorMessage: aktProp['errorMessage'].description,
      // labelClasses: aktProp['labelClasses'].description,
      // inputClasses: aktProp['inputClasses'].description,
      // inputGroupClasses: aktProp['inputGroupClasses'].description,
      // value: aktProp['value'].description,
      // addonRightIcon: aktProp['addonRightIcon'].description,
      // addonLeftIcon: aktProp['addonLeftIcon'].description,
      // rounded: aktProp['rounded'].description,
      // height: aktProp['height'].description,
      // disabled: aktProp['disabled'].description

    }
  }
}),
{
  info: {
  }
})
