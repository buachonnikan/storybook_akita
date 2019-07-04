<template>
  <card
    class="receipt small mh-100 overflow-auto"
    body-classes="p-3">
    <div class="media justify-content-center mx-auto _min-h-55">
      <img
        v-if="headerPhoto"
        class="_header-icon"
        :src="headerPhoto"
        alt="Receipt header">
    </div>
    <div class="d-flex flex-column text-center pt-3">
      <span class="font-weight-bold _fs-18">
        {{ $t('aktReceipt.storeName', { name: storeName }) }}
      </span>
      <span class="_fs-14">
        {{ $t('aktReceipt.branchName', { name: branchName }) }}
      </span>
    </div>
    <div class="d-flex flex-column text-center pt-4 _fs-14">
      <span>
        {{ $t('aktReceipt.receipt') }}
      </span>
      <span>TAX ID : {{ taxNo }} ( VAT Include )</span>
      <span>POS ID : POS NO.{{ posNo }}</span>
      <span>{{ $t('aktReceipt.cashier') }} : {{ cashierName }}</span>
    </div>
    <div class="row no-gutters pt-4 pb-2 border-bottom border-dark">
      <div class="col-6 text-left">
        <span>{{ createdAt | date }}</span>
        <span class="pl-3">
          {{ createdAt | time }}
        </span>
      </div>
    </div>
    <div class="row no-gutters py-2 border-bottom border-dark">
      <div class="col-12 font-weight-bold text-center">
        {{ $t('aktReceipt.title') }}
      </div>
    </div>
    <div
      class="
        row no-gutters mt-3 border-top-0 border-left-0 border-right-0
        _border-width-1 _border-style-dashed
      ">
      <div class="col-12">
        <div
          v-for="product in products"
          :key="product.id"
          class="row mb-3">
          <div class="col-12 text-left d-flex">
            <div class="font-weight-bold font-italic _mw-75 overflow-hidden text-nowrap">
              {{ product.name }}
            </div>
            <div class="pl-1 _mw-25 overflow-hidden text-nowrap">
              {{
                product.variantOption
                  ? joinProductOptions(Object.values(product.variantOption))
                  : ''
              }}
            </div>
          </div>
          <div class="col-5 text-left">
            {{ product.code }}
          </div>
          <div class="col-4 text-left pl-0">
            {{ product.quantity }}x{{ product.fullPrice | price }}
          </div>
          <div class="col-3 text-right pl-0">
            {{ calculateTotal(product.quantity, product.fullPrice) | price }}
          </div>
          <div
            v-if="product.discount > 0"
            class="col-12">
            <div class="row">
              <div class="col-5 text-left">
                {{ $t('aktReceipt.discount') }}
              </div>
              <div class="col-4 text-left pl-0">
                {{ product.quantity }}x{{ product.discount | discountPrice }}
              </div>
              <div class="col-3 text-right pl-0">
                {{ calculateTotal(product.quantity, product.discount) | discountPrice }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        row no-gutters py-2 border-top-0 border-left-0 border-right-0
        _border-width-1 _border-style-dashed
      ">
      <div class="col-6 text-left">
        {{ $t('aktReceipt.itemsDiscount') }}
      </div>
      <div class="col-6 text-right">
        {{ sumItemsDiscount | discountPrice }}
      </div>
      <div class="col-6 text-left">
        {{ $t('aktReceipt.orderDiscount') }}
      </div>
      <div class="col-6 text-right">
        {{ orderDiscount | discountPrice }}
      </div>
      <div class="col-6 text-left">
        {{ `${$t('aktReceipt.vat')} ${vatRate} %` }}
      </div>
      <div class="col-6 text-right">
        {{ vatPrice | price }}
      </div>
      <div class="col-6 text-left font-weight-bold">
        {{ $t('aktReceipt.net') }}
      </div>
      <div class="col-6 text-right font-weight-bold">
        {{ net | price }}
      </div>
    </div>
    <div class="row no-gutters py-2 border-bottom border-dark">
      <div class="col-12">
        <div class="row no-gutters">
          <div
            v-for="payment in payments"
            :key="`${payment.type}${payment.nameLocal}`"
            class="col-12">
            <div class="row">
              <div class="col-6 text-left">
                {{ `${$t('aktReceipt.payment')} (${payment.nameLocal})` }}
              </div>
              <div class="col-6 text-right">
                {{ payment.amount || 0 | price }}
              </div>
            </div>
          </div>
          <div class="col-6 text-left">
            {{ $t('aktReceipt.change') }}
          </div>
          <div class="col-6 text-right">
            {{ change | price }}
          </div>
        </div>
      </div>
    </div>
    <div class="media justify-content-center mt-3 mx-auto _min-h-55">
      <img
        v-if="footerPhoto"
        class="_header-icon"
        :src="footerPhoto"
        alt="Receipt footer">
    </div>
    <div class="row mt-2">
      <div class="col-12 text-center _min-h-19">
        {{ receiptText }}
      </div>
    </div>
  </card>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AktReceipt',
  filters: {
    date (value) {
      return moment(value).format('DD/MM/YY')
    },
    time (value) {
      return moment(value).format('HH:MM')
    }
  },
  props: {
    headerPhoto: {
      type: String,
      default: ''
    },
    footerPhoto: {
      type: String,
      default: ''
    },
    storeName: {
      type: String,
      default: ''
    },
    branchName: {
      type: String,
      default: ''
    },
    taxNo: {
      type: String,
      default: ''
    },
    posNo: {
      type: String,
      default: ''
    },
    cashierName: {
      type: String,
      default: ''
    },
    createdAt: {
      type: Date,
      default: undefined
    },
    products: {
      type: Array,
      default: () => []
    },
    sumItemsDiscount: {
      type: Number,
      default: 0.00
    },
    orderDiscount: {
      type: Number,
      default: 0
    },
    vatRate: {
      type: Number,
      default: 0
    },
    vatPrice: {
      type: Number,
      default: 0.00
    },
    net: {
      type: Number,
      default: 0
    },
    payments: {
      type: Array,
      default: () => []
    },
    change: {
      type: Number,
      default: 0
    },
    receiptText: {
      type: String,
      default: ''
    }
  },
  methods: {
    calculateTotal (quantity, price) {
      return quantity * price
    },
    joinProductOptions (options) {
      return `(${options.join('/')})`
    }
  }
}
</script>

<style lang="scss" scoped>
._border-style-dashed {
  border-style: dashed;
}

._header-icon {
  width: 3.4375rem;
  height: 3.4375rem;
}

._min-h {
  &-19 {
    min-height: 1.1875rem;
  }
  &-55 {
    min-height: 3.4375rem;
  }
}
</style>
