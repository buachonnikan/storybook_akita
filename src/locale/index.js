import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Components
import aktReceiptTh from './components/akt-receipt-th.json'
import aktReceiptEn from './components/akt-receipt-en.json'

// Layout
import aktMainMenuTh from './layout/components/akt-main-menu-th.json'
import aktMainMenuEn from './layout/components/akt-main-menu-en.json'

// Order
import orderListTh from './views/Order/list-th.json'
import orderListEn from './views/Order/list-en.json'
import orderDetailTh from './views/Order/detail-th.json'
import orderDetailEn from './views/Order/detail-en.json'
import aktNewOrderTableTh from './views/Order/components/akt-new-order-table-th.json'
import aktNewOrderTableEn from './views/Order/components/akt-new-order-table-en.json'
import aktPrepareShipmentOrderTableTh from './views/Order/components/akt-prepare-shipment-order-table-th.json'
import aktPrepareShipmentOrderTableEn from './views/Order/components/akt-prepare-shipment-order-table-en.json'
import aktShippedOrderTableTh from './views/Order/components/akt-shipped-order-table-th.json'
import aktShippedOrderTableEn from './views/Order/components/akt-shipped-order-table-en.json'
import aktClosedOrderTableTh from './views/Order/components/akt-closed-order-table-th.json'
import aktClosedOrderTableEn from './views/Order/components/akt-closed-order-table-en.json'
import aktOrderDetailItemsTh from './views/Order/components/akt-order-detail-items-th.json'
import aktOrderDetailItemsEn from './views/Order/components/akt-order-detail-items-en.json'
import aktOrderPaymentTh from './views/Order/components/akt-order-payment-th.json'
import aktOrderPaymentEn from './views/Order/components/akt-order-payment-en.json'
import aktOrderStateWizardTh from './views/Order/components/akt-order-state-wizard-th.json'
import aktOrderStateWizardEn from './views/Order/components/akt-order-state-wizard-en.json'
import aktStateTh from './views/Order/components/akt-state-th.json'
import aktStateEn from './views/Order/components/akt-state-en.json'

// POS
import aktBranchDetailTh from './views/POS/components/akt-branch-detail-th.json'
import aktBranchDetailEn from './views/POS/components/akt-branch-detail-en.json'
import aktBranchReceiptSettingTh from './views/POS/components/akt-branch-receipt-setting-th.json'
import aktBranchReceiptSettingEn from './views/POS/components/akt-branch-receipt-setting-en.json'
import branchReceiptTh from './views/POS/branch-receipt-th.json'
import branchReceiptEn from './views/POS/branch-receipt-en.json'

// Product
import productIndexTh from './views/Product/index-th.json'
import productIndexEn from './views/Product/index-en.json'
import productCreateEditTh from './views/Product/create-edit-th.json'
import productCreateEditEn from './views/Product/create-edit-en.json'
import aktInputTagTh from './views/Product/components/akt-input-tag-th.json'
import aktInputTagEn from './views/Product/components/akt-input-tag-en.json'
import aktProductDetailsTh from './views/Product/components/akt-product-details-th.json'
import aktProductDetailsEn from './views/Product/components/akt-product-details-en.json'
import aktProductInformationTh from './views/Product/components/akt-product-information-th.json'
import aktProductInformationEn from './views/Product/components/akt-product-information-en.json'
import aktProductListTh from './views/Product/components/akt-product-list-th.json'
import aktProductListEn from './views/Product/components/akt-product-list-en.json'
import aktSkuTableTh from './views/Product/components/akt-sku-table-th.json'
import aktSkuTableEn from './views/Product/components/akt-sku-table-en.json'
import aktUploadTh from './views/Product/components/akt-upload-th.json'
import aktUploadEn from './views/Product/components/akt-upload-en.json'
import aktVariantsTh from './views/Product/components/akt-variants-th.json'
import aktVariantsEn from './views/Product/components/akt-variants-en.json'
import aktVariantsCardTh from './views/Product/components/akt-variants-card-th.json'
import aktVariantsCardEn from './views/Product/components/akt-variants-card-en.json'
import aktCatalogCardTh from './views/Product/components/akt-catalog-card-th.json'
import aktCatalogCardEn from './views/Product/components/akt-catalog-card-en.json'

// Setting
import aktSettingCardTh from './views/Setting/components/akt-setting-card-th.json'
import aktSettingCardEn from './views/Setting/components/akt-setting-card-en.json'
import aktUserTableTh from './views/Setting/components/akt-user-table-th.json'
import aktUserTableEn from './views/Setting/components/akt-user-table-en.json'
import aktInviteUserTableTh from './views/Setting/components/akt-invite-user-table-th.json'
import aktInviteUserTableEn from './views/Setting/components/akt-invite-user-table-en.json'
import settingTh from './views/Setting/index-th.json'
import settingEn from './views/Setting/index-en.json'
import settingUserListTh from './views/Setting/User/list-th.json'
import settingUserListEn from './views/Setting/User/list-en.json'
import settingUserEditTh from './views/Setting/User/edit-th.json'
import settingUserEditEn from './views/Setting/User/edit-en.json'
import settingStoreTh from './views/Setting/Store/index-th.json'
import settingStoreEn from './views/Setting/Store/index-en.json'
import settingStoreEditTh from './views/Setting/Store/edit-th.json'
import settingStoreEditEn from './views/Setting/Store/edit-en.json'

// POS
import posListTh from './views/POS/list-th.json'
import posListEn from './views/POS/list-en.json'
import aktBranchTableTh from './views/POS/components/akt-branch-table-th.json'
import aktBranchTableEn from './views/POS/components/akt-branch-table-en.json'
import aktUnitTableTh from './views/POS/components/akt-unit-table-th.json'
import aktUnitTableEn from './views/POS/components/akt-unit-table-en.json'
import aktCashierTableTh from './views/POS/components/akt-cashier-table-th.json'
import aktCashierTableEn from './views/POS/components/akt-cashier-table-en.json'
import aktSellerTableTh from './views/POS/components/akt-seller-table-th.json'
import aktSellerTableEn from './views/POS/components/akt-seller-table-en.json'
import cashierCreateEditTh from './views/POS/cashier-create-edit-th.json'
import cashierCreateEditEn from './views/POS/cashier-create-edit-en.json'
import sellerCreateEditTh from './views/POS/seller-create-edit-th.json'
import sellerCreateEditEn from './views/POS/seller-create-edit-en.json'
import posUnitCreateEditTh from './views/POS/pos-unit-create-edit-th.json'
import posUnitCreateEditEn from './views/POS/pos-unit-create-edit-en.json'

// Other
import errorHandlingTh from './errorHandling/th.json'
import errorHandlingEn from './errorHandling/en.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'th',
  silentTranslationWarn: true,
  messages: {
    th: {
      aktReceipt: aktReceiptTh,
      orderList: orderListTh,
      orderDetail: orderDetailTh,
      aktNewOrderTable: aktNewOrderTableTh,
      aktPrepareShipmentOrderTable: aktPrepareShipmentOrderTableTh,
      aktShippedOrderTable: aktShippedOrderTableTh,
      aktClosedOrderTable: aktClosedOrderTableTh,
      aktOrderDetailItems: aktOrderDetailItemsTh,
      aktOrderPayment: aktOrderPaymentTh,
      aktOrderStateWizard: aktOrderStateWizardTh,
      aktState: aktStateTh,
      aktBranchDetail: aktBranchDetailTh,
      aktBranchReceiptSetting: aktBranchReceiptSettingTh,
      branchReceipt: branchReceiptTh,
      productIndex: productIndexTh,
      productCreateEdit: productCreateEditTh,
      aktInputTag: aktInputTagTh,
      aktProductDetails: aktProductDetailsTh,
      aktProductInformation: aktProductInformationTh,
      aktProductList: aktProductListTh,
      aktSkuTable: aktSkuTableTh,
      aktUpload: aktUploadTh,
      aktVariants: aktVariantsTh,
      aktCatalogCard: aktCatalogCardTh,
      aktVariantsCard: aktVariantsCardTh,
      aktSettingCard: aktSettingCardTh,
      aktUserTable: aktUserTableTh,
      aktInviteUserTable: aktInviteUserTableTh,
      setting: settingTh,
      settingUserList: settingUserListTh,
      settingUserEdit: settingUserEditTh,
      settingStore: settingStoreTh,
      settingStoreEdit: settingStoreEditTh,
      posList: posListTh,
      aktBranchTable: aktBranchTableTh,
      aktUnitTable: aktUnitTableTh,
      aktCashierTable: aktCashierTableTh,
      aktSellerTable: aktSellerTableTh,
      errorHandling: errorHandlingTh,
      cashierCreateEdit: cashierCreateEditTh,
      sellerCreateEdit: sellerCreateEditTh,
      posUnitCreateEdit: posUnitCreateEditTh,
      aktMainMenu: aktMainMenuTh
    },
    en: {
      aktReceipt: aktReceiptEn,
      orderList: orderListEn,
      orderDetail: orderDetailEn,
      aktNewOrderTable: aktNewOrderTableEn,
      aktPrepareShipmentOrderTable: aktPrepareShipmentOrderTableEn,
      aktShippedOrderTable: aktShippedOrderTableEn,
      aktClosedOrderTable: aktClosedOrderTableEn,
      aktOrderDetailItems: aktOrderDetailItemsEn,
      aktOrderPayment: aktOrderPaymentEn,
      aktOrderStateWizard: aktOrderStateWizardEn,
      aktState: aktStateEn,
      aktBranchDetail: aktBranchDetailEn,
      aktBranchReceiptSetting: aktBranchReceiptSettingEn,
      branchReceipt: branchReceiptEn,
      productIndex: productIndexEn,
      productCreateEdit: productCreateEditEn,
      aktInputTag: aktInputTagEn,
      aktProductDetails: aktProductDetailsEn,
      aktProductInformation: aktProductInformationEn,
      aktProductList: aktProductListEn,
      aktSkuTable: aktSkuTableEn,
      aktUpload: aktUploadEn,
      aktVariants: aktVariantsEn,
      aktCatalogCard: aktCatalogCardEn,
      aktVariantsCard: aktVariantsCardEn,
      aktSettingCard: aktSettingCardEn,
      aktUserTable: aktUserTableEn,
      aktInviteUserTable: aktInviteUserTableEn,
      setting: settingEn,
      settingUserList: settingUserListEn,
      settingUserEdit: settingUserEditEn,
      settingStoreEdit: settingStoreEditEn,
      settingStore: settingStoreEn,
      posList: posListEn,
      aktBranchTable: aktBranchTableEn,
      aktUnitTable: aktUnitTableEn,
      aktCashierTable: aktCashierTableEn,
      aktSellerTable: aktSellerTableEn,
      errorHandling: errorHandlingEn,
      cashierCreateEdit: cashierCreateEditEn,
      sellerCreateEdit: sellerCreateEditEn,
      posUnitCreateEdit: posUnitCreateEditEn,
      aktMainMenu: aktMainMenuEn
    }
  }
})
