import { IMSlider_1, IMSlider_2, IMSlider_3, IMSlider_4 } from 'assets'
import type { RouterModel } from 'models'

export const MAIN_MENUS: RouterModel[] = [
  {
    label: 'Trang chủ',
    path: '/'
  },
  {
    label: 'Sản phẩm',
    path: '/products'
  },
  // {
  //   label: 'Tin tức',
  //   path: '/news'
  // },
  {
    label: 'Về chúng tôi',
    path: '/about-us'
  }
]

export const HEADERS = (categories: RouterModel[]): RouterModel[] => [
  {
    label: 'Trang chủ',
    path: '/'
  },
  {
    label: 'Sản phẩm',
    path: '/products',
    childrens: categories
  },
  // {
  //   label: 'Tin tức',
  //   path: '/news'
  // },
  {
    label: 'Về chúng tôi',
    path: '/about-us'
  }
]

export const FOOTER_ROUTERS = (categories: RouterModel[]) => [
  {
    label: 'Menu chính',
    childrens: MAIN_MENUS
  },
  {
    label: 'Line Sản Phẩm',
    childrens: categories
  }
]

export const SLIDERS: string[] = [IMSlider_1, IMSlider_2, IMSlider_3, IMSlider_4]
