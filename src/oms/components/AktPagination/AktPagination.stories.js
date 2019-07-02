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
    pageCount: {
      default: number('pageCount', 10)
    },
    perPage: {
      defualt: number('perPage', 1)
    },
    total: {
      default: number('total', 10)
    },
    value: {
      default: number('value', 1)
    },
    align: {
      default: select('Align', options, 'center')
    }
  },
  template: `<akt-pagination
    :pageCount="pageCount"
    :perPage="perPage" :total="total"
    :value="value" :size="size" :align="align"
    ></akt-pagination>`,
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
