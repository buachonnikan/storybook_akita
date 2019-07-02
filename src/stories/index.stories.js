/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from 'storybook-addon-vue-info'

import MyButton from './MyButton'
import Welcome from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}))

storiesOf('Button', module)
  .addDecorator(withInfo)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
    propsDescription: {
      MyButton: {
        // These description will appear in `description` column in props table
        label: 'A label for my awesome component',
        visible: 'Whether component is visible or not'
      }
    }
  }),
  {
    info: {
      summary: 'Summary for Button with text'
    }
  })
  .add('with JSX', () => ({
    components: { MyButton },
    render (h) {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
