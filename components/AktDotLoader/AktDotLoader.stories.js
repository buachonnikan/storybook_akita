import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktDotLoader from './AktDotLoader.vue'

const stories = storiesOf('AktDotLoader', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Dot Loader', () => ({
  components: { AktDotLoader },
  template: `
    <akt-dot-loader>
    </akt-dot-loader>
  `,
  data () {
    return {
    }
  },
  propsDescription: {
    AktDotLoader: {
    }
  }
}),
{
  info: {
  }
})
