import { storiesOf } from '@storybook/vue'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

import AktPagination from './AktPagination.vue'

const stories = storiesOf('AktPagination', module)

stories.addDecorator(withInfo).addDecorator(withKnobs)

const options = {
  Center: 'center',
  Start: 'start',
  End: 'end'
}

stories.add('Pagination Basic', () => ({
  components: { AktPagination },
  props: {
    perPage: {
      default: number('perPage', 100)
    },
    total: {
      default: number('total', 100)
    },
    value: {
      default: number('value', 1)
    },
    align: {
      default: select('Align', options, 'center')
    }
  },
  template: `<akt-pagination
    :value="value"
    :perPage="perPage"
    :total="total"
    @input="onChangePage"
    :align="align"
    ></akt-pagination>`,
  methods: {
    onChangePage (page) {
      this.value = page
      console.log(page)
    }
  },
  propsDescription: {
    AktPagination: {
      pageCount: 'Pagination page count. This should be specified in combination with perPage',
      perPage: 'Pagination per page. Should be specified with total or pageCount',
      total: 'Can be specified instead of pageCount. The page count in this case will be total/perPage',
      value: 'Pagination value',
      size: 'Pagination size',
      align: 'Pagination alignment (e.g center|start|end)'
    }
  }
}),
{
  info: {
  }
})
