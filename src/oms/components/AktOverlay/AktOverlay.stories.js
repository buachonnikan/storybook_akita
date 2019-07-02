import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktOverlay from './AktOverlay.vue'

const stories = storiesOf('AktOverlay', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Overlay', () => ({
  components: { AktOverlay },
  props: {
    isLoading: {
      default: boolean('isLoading', false)
    }
  },
  template: `<akt-overlay :isLoading="isLoading"
        style="width:300px; height:200px;">
        </akt-overlay>`,
  propsDescription: {
    AktOverlay: {

    }
  }
}),
{
  info: {
  }
})
