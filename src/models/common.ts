export interface IconModel {
  color?: string
  width?: number
  height?: number
  className?: string
  onClick?: () => void
}

export interface RouterModel {
  label: string
  path: string
  value?: string
  childrens?: RouterModel[]
}

export interface ProductParamsModel extends Record<string, unknown> {
  category?: string
  min_price?: string
  max_price?: string
  brand?: string
  in_stock_only?: string
}

export interface AuthModel {
  username: string
  password: string
}