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
  sale_price: number
  sku: string
  status: string
  tag: string
  total_quantity: number
  type: string
  updated_at: string
}

export interface ProductCreateRequestModel {
  brand: string
  category: string
  description: string
  description2: string
  image_url: string
  name: string
  options?: ProductOptionModel[]
  price: string
  sale_price: string
  tag?: string
  total_quantity: string
}

export enum ProductOptionTypeModel {
  SIZE,
  COLOR
}

export interface ProductOptionModel {
  id: string
  name: string
  product_id: string
  key: string
  type: ProductOptionTypeModel
  price: string
  items: ProductOptionItemModel[]
  created_at: string
}

export interface ProductOptionItemModel {
  id: string
  label: string
  value: string
  created_at: string
}
