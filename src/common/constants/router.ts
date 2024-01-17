import { lazy } from 'react'
import { ICNavbarOrder, ICNavbarProduct } from 'assets'

//public
const HomePage = lazy(() => import('features/public/home'))
const ProductPage = lazy(() => import('features/public/product'))
const ProductDetailPage = lazy(() => import('features/public/product/productDetail'))
const NewPage = lazy(() => import('features/public/new'))
const NewDetailPage = lazy(() => import('features/public/new/newDetail'))
const AboutUsPage = lazy(() => import('features/public/aboutUs'))
const PaymentPage = lazy(() => import('features/public/payment'))
const PaymentResultPage = lazy(() => import('features/public/payment/PaymentResult'))

//manager
const ProductManagementPage = lazy(() => import('features/private/product'))
const OrderManagementPage = lazy(() => import('features/private/order'))
const ProductDetailManagementPage = lazy(() => import('features/private/product/productDetail'))

const NotFoundPage = lazy(() => import('features/common/NotFound'))
export interface IRouter {
  path: string
  name: string
  nameKo?: string
  element: any
  isHidden?: boolean
  isHiddenRouter?: boolean
  isDetail?: boolean
  icon?: any
  disabled?: boolean
  subNavs?: {
    path: string
    name: string
    element?: any
    isHiden?: boolean
    isDetail?: boolean
  }[]
}

export const paths = {
  home: {
    prefix: '/'
  },
  product: {
    prefix: '/products',
    detail: (id: string = ':id') => `/products/${id}`
  },
  new: {
    prefix: '/news',
    detail: (id: string = ':id') => `/news/${id}`
  },
  aboutUs: {
    prefix: '/about-us'
  },
  payment: {
    prefix: '/payment',
    result: '/payment-result'
  }
}

export const rootRouter: IRouter[] = [
  {
    path: paths.home.prefix,
    name: '',
    element: HomePage
  },
  {
    path: paths.product.prefix,
    name: '',
    element: ProductPage
  },
  {
    path: paths.product.detail(),
    name: '',
    element: ProductDetailPage
  },
  // {
  //   path: paths.new.prefix,
  //   name: '',
  //   element: NewPage
  // },
  // {
  //   path: paths.new.detail(),
  //   name: '',
  //   element: NewDetailPage
  // },
  {
    path: paths.aboutUs.prefix,
    name: '',
    element: AboutUsPage
  },
  {
    path: paths.payment.prefix,
    name: '',
    element: PaymentPage
  },
  {
    path: paths.payment.result,
    name: '',
    element: PaymentResultPage
  }
]

export const pathsManager = {
  products: {
    prefix: 'products',
    new: '/manager/products/new',
    detail: (id: string = ':id') => `/manager/products/${id}`
  },
  orders: {
    prefix: 'orders',
    detail: (id: string = ':id') => `/manager/orders/${id}`
  }
}

export const privateRouter: IRouter[] = [
  {
    path: pathsManager.orders.prefix,
    element: OrderManagementPage,
    name: 'Quản lý đơn hàng',
    icon: ICNavbarOrder
  },
  //product
  {
    path: pathsManager.products.prefix,
    element: ProductManagementPage,
    name: 'Quản lý sản phẩm',
    icon: ICNavbarProduct
  },
  {
    path: pathsManager.products.new,
    element: ProductDetailManagementPage,
    name: 'Quản lý sản phẩm',
    icon: ICNavbarProduct,
    isHidden: true
  },
  {
    path: pathsManager.products.detail(),
    element: ProductDetailManagementPage,
    name: 'Chi tiết sản phẩm',
    icon: ICNavbarProduct,
    isHidden: true
  }
]

export const rootError: IRouter[] = [
  {
    path: '*',
    name: 'home.header.navigation.home',
    element: NotFoundPage
  }
]
