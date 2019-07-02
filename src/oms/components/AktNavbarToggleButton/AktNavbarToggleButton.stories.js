import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktNavbarToggleButton from './AktNavbarToggleButton.vue'

const stories = storiesOf('AktNavbarToggleButton', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Navbar Toggle Button', () => ({
  components: { AktNavbarToggleButton },
  props: {
    target: {
      default: text('target', 'target')
    },
    toggle: {
      default: boolean('toggle', false)
    }
  },
  template: `
    <akt-navbar-toggle-button
    :target="target" :toggle="toggle">
    </akt-navbar-toggle-button>
  `,
  data () {
    return {
    }
  },
  propsDescription: {
    AktNavbarToggleButton: {
      required: 'Whether input is required (adds an asterix *)',
      label: 'Input label (text before input)',
      labelClasses: 'Input label css classes'
    }
  }
}),
{
  info: {
  }
})
