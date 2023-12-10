import { IMSlider_1, IMSlider_2, IMSlider_3, IMSlider_4 } from 'assets'
import type { RouterModel } from 'models'

export const CONTACTS: RouterModel[] = [
  {
    label: 'Câu hỏi thường gặp',
    path: '/',
    value: ''
  },
  {
    label: 'Bảo mật thông tin',
    path: '/',
    value: ''
  },
  {
    label: 'Bảo hành & Đổi trả',
    path: '/',
    value: ''
  },
  {
    label: 'Điều khoản sử dụng',
    path: '/',
    value: ''
  },
  {
    label: 'Chính sách hoàn tiền',
    path: '/',
    value: ''
  },
  {
    label: 'Chính sách vận chuyển',
    path: '/',
    value: ''
  },
  {
    label: 'Terms of Service',
    path: '/',
    value: ''
  },
  {
    label: 'Liên hệ',
    path: '/',
    value: ''
  }
]

export const MAIN_MENUS: RouterModel[] = [
  {
    label: 'Trang chủ',
    path: '/'
  },
  {
    label: 'Sản phẩm',
    path: '/'
  },
  {
    label: 'Tin tức',
    path: '/'
  },
  {
    label: 'Sự kiện',
    path: '/'
  },
  {
    label: 'E-Warranty',
    path: '/'
  },
  {
    label: 'HyperWork & Khách hàng',
    path: '/'
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
  {
    label: 'Tin tức',
    path: '/news'
  },
  {
    label: 'Về chúng tôi',
    path: '/about-us'
  }
]

export const FOOTER_ROUTERS = (categories: RouterModel[]) => [
  {
    label: 'Hỗ trợ',
    childrens: CONTACTS
  },
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
