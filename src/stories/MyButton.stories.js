import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import MyButton from './MyButton.vue'

const stories = storiesOf('Storybook Knobs', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withInfo).addDecorator(withKnobs)

// Assign `props` to the story's component, calling
// knob methods within the `default` property of each prop,
// then pass the story's prop data to the component’s prop in
// the template with `v-bind:` or by placing the prop within
// the component’s slot.
stories.add('with a button', () => ({
  components: { MyButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    },
    text: {
      default: text('Text', 'Hello Storybook')
    }
  },
  data () {
    return {
      item: { isDisabled: false, text: 'This is a test' }
    }
  },
  template: `<MyButton :isDisabled="isDisabled">{{ text }}</MyButton>`,
  propsDescription: {
    MyButton: {
      isDisabled: 'yayyyyyyyyyyyyyy',
      isDisabled2: 'yay2'
    }
  }
}),
{
  info: {
    summary: `
          ## Customize docs in preview
          To customize docs in preview area, set your docs component to \`wrapperComponent\` option.
          This addon passes two props:
          - \`info\` ... Information about story and contained components. Interface defined in \`src/types/info\` (\`StoryInfo\`).
          - \`options\` ... Addon options.
          Story component is passed as default slot.
          For more detail, please look at source code of this example
          (\`example/components/customDocs/wrapper\`).
          <br/>
          ## Customize docs in addon panel
          Not supported.
          It's challenging to change components in addon panel.
          To avoid plugin being complex and messy, customizing addon panel is not supported.
          You can also write story in render function with JSX.
          Of course you should configure Babel.
          \`\`\`jsx
          () => ({
            render(h) {
              return <my-button label="I'm a button!"/>
            }
          })
          \`\`\`
        `
  }
})
