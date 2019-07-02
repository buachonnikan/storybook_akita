import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktTableCard from './AktTableCard.vue'

const stories = storiesOf('AktTableCard', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Table Card', () => ({
  components: { AktTableCard },
  props: {
    text1: {
      default: text('text1', 'text1')
    },
    text2: {
      default: text('text2', 'text2')
    }
  },
  template: `
      <akt-table-card :label="label">
        <div style="width:200px; height:40px; border:1px solid gray">{{text1}}</div>
        <div style="width:200px; height:40px; border:1px solid gray">{{text2}}</div>
      </akt-table-card>`,
  propsDescription: {
    AktTableCard: {
    }
  }
}),
{
  info: {
  }
})
