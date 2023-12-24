import type { ProductModel } from './product'

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
  page?: number
  limit?: number
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
    onClick: Function
  }[]
}

export interface CartItemModel extends ProductModel {
  quantity: number
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
