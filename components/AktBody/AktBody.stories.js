import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktBody from '@akita_component/akt-body/AktBody.vue'

const stories = storiesOf('AktBody', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Body', () => ({
  components: { AktBody },
  props: {
    label: {
      default: text('label', 'Label')
    }
  },
  template: `<akt-body :label="label"></akt-body>`,
  propsDescription: {
    AktBody: {
    }
  }
}),
{
  info: {
  }
})
