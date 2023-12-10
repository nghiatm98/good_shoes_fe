import { lazy } from 'react'

const HomePage = lazy(() => import('features/public/home'))
const LoginPage = lazy(() => import('features/common/Login'))
const ProductPage = lazy(() => import('features/public/product'))
const ProductDetailPage = lazy(() => import('features/public/product/productDetail'))
const NewPage = lazy(() => import('features/public/new'))
const NewDetailPage = lazy(() => import('features/public/new/newDetail'))
const AboutUsPage = lazy(() => import('features/public/aboutUs'))
const PaymentPage = lazy(() => import('features/public/payment'))

const NotFoundPage = lazy(() => import('features/common/NotFound'))
export interface IRouter {
  path: string
  name: string
  nameKo?: string
  element: any
  isHiden?: boolean
  isHidenRouter?: boolean
  isDetail?: boolean
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
    prefix: '/payment'
  }
}

export const rootRouter: IRouter[] = [
  {
    path: paths.home.prefix,
    name: 'home.header.navigation.home',
    element: HomePage
  },
  {
    path: paths.product.prefix,
    name: 'home.header.navigation.home',
    element: ProductPage
  },
  {
    path: paths.product.detail(),
    name: 'home.header.navigation.home',
    element: ProductDetailPage
  },
  {
    path: paths.new.prefix,
    name: 'home.header.navigation.home',
    element: NewPage
  },
  {
    path: paths.new.detail(),
    name: 'home.header.navigation.home',
    element: NewDetailPage
  },
  {
    path: paths.aboutUs.prefix,
    name: 'home.header.navigation.home',
    element: AboutUsPage
  },
  {
    path: paths.payment.prefix,
    name: 'home.header.navigation.home',
    element: PaymentPage
  }
]

export const rootError: IRouter[] = [
  {
    path: '*',
    name: 'home.header.navigation.home',
    element: NotFoundPage
  }
]
