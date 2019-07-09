import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktInputTag from '@akita_component/akt-input-tag/AktInputTag.vue'

const stories = storiesOf('AktInputTag', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Input Tag', () => ({
  components: { AktInputTag },
  props: {
    label: {
      default: text('label', 'Label Tag')
    },
    required: {
      defualt: boolean('required', false)
    },
    tag: {
      default: array('tags', ['tag1', 'tag2', 'tag3', 'tag4'])
    }
  },
  template: `
    <akt-input-tag
    :label="label" :tags="tag"
    :required="required">
    </akt-input-tag>
  `,
  data () {
    return {
      // tag: ['tag1', 'tag2', 'tag3', 'tag4']
    }
  },
  propsDescription: {
    AktInputTag: {
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
