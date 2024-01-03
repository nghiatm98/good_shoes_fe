export interface ProductModel {
  brand: string
  category: string
  check_inventory: boolean
  cost: number
  created_at: string
  deleted_at: string
  description: string
  description2: string
  id: string
  image_url: string
  is_variant: boolean
  multiple_variant: boolean
  name: string
  options: ProductOptionModel[]
  price: number
  sale_price: number | string
  sku: string
  status: string
  tag: string
  total_quantity: number | string
  type: string
  updated_at: string
  size?: string
  color?: string
  product_id?: string
  parent_product_id?: string
  parent_id?: string
}

export interface ProductCreateRequestModel {
  brand?: string
  category?: string
  description?: string
  description2?: string
  image_url?: string
  name?: string
  options?: ProductOptionModel[]
  price?: string | number
  sale_price: number
  tag?: string
  total_quantity?: number
}

export interface ProductChangeQuantityModel {
  product_id: string
  parent_id: string
  quantity: number
}

export enum ProductOptionTypeModel {
  SIZE = "SIZE",
  COLOR = "COLOR"
}

export interface ProductOptionModel {
  id?: string
  name: string
  product_id?: string
  key?: string
  type: ProductOptionTypeModel
  price?: string
  items: ProductOptionItemModel[]
  created_at?: string
}

export interface ProductOptionItemModel {
  id?: string
  label: string
  value: string
  created_at?: string
  image_url?: string
}
