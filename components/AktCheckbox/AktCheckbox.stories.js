import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktCheckbox from '@akita_component/akt-checkbox/AktCheckbox.vue'

const stories = storiesOf('AktCheckbox', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

stories.add('Checkbox', () => ({
  components: { AktCheckbox },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    inline: {
      defualt: boolean('inline', false)
    },
    label: {
      default: text('label', 'label')
    },
    text: {
      default: text('text', 'text')
    },
    checked: {
      default: boolean('checked', false)
    }
  },
  data () {
    return {
      test: true
    }
  },
  template: `<akt-checkbox
    name="check"
    :checked="checked"
    :disabled="disabled"
    :inline="inline"
    :label="label"
    @change="check"
    >{{text}}
    </akt-checkbox>`,
  methods: {
    check (check) {
      this.checked = check
      console.log(check)
    }
  },
  propsDescription: {
    AktCheckbox: {

    }
  }
}),
{
  info: {
  }
})
