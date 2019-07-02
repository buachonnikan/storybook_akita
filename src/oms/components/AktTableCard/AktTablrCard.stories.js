import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktTableCard from './AktTableCard.vue'

const stories = storiesOf('AktTableCard', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Table Card', () => ({
  components: { AktTableCard },
  props: {
    text: {
      default: text('text', 'test')
    }
  },
  template: `<akt-table-card
    :label="label"
    >{{text}}</akt-table-card>`,
  propsDescription: {
    AktTableCard: {
    }
  }
}),
{
  info: {
  }
})
