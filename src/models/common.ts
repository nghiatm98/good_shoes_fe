import type { ProductModel } from './product'

export interface IconModel {
  color?: string
  width?: number
  height?: number
  className?: string
  onClick?: Function
}

export interface RouterModel {
  label: string
  path: string
  value?: string
  childrens?: RouterModel[]
  onClick?: Function
}

export interface ProductParamsModel extends Record<string, unknown> {
  category?: string
  min_price?: string
  max_price?: string
  brand?: string
  in_stock_only?: string
  page?: number
  limit?: number
  color?: string
  size?: string
  search?: string
}

export interface AuthModel {
  username: string
  password: string
}

export interface HeaderTableModel {
  label: string
  field?: string
  actions?: {
    label: string
    onClick?: Function
    list?: RouterModel[]
  }[]
}

export interface CartItemModel extends ProductModel {
  qty_ordered: number
}

export enum InputTypeModel {
  TEXT,
  EDITOR
}

export enum OrderStatusModel {
  NEW = 'new',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELED = 'canceled'
}
