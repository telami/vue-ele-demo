import { createApi } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/hearder-detail/header-detail'
import ShopCartList from 'components/shop-cart-list/shop-cart-list'
import ShopCartSticky from 'components/shop-cart-sticky/shop-cart-sticky'

createApi(Vue, HeaderDetail)
createApi(Vue, ShopCartList)
createApi(Vue, ShopCartSticky)
