import type { CartItemModel } from "./common"
import type { ProductModel } from "./product"

export interface OrderModel {
  id: string
  order_number: string
  status: string
  payment_status: string
  fulfillment_status: string
  shipment_status: string
  process_status: string
  total_item_qty: string
  total_item_count: string
  customer_id: string
  customer_external_id: string
  customer_email: string
  customer_phone: string
  customer_first_name: string
  customer_middle_name: string
  customer_last_name: string
  customer_tax_number: string
  customer_company_name: string
  currency: string
  base_currency: string
  currency_exchange_rate: string
  subtotal: string
  subtotal_incl_tax: string
  discount_percent: string
  discount_amount: string
  applied_discounts: string
  shipping_method: string
  shipping_description: string
  shipping_amount: string
  tax_amount: string
  extra_amount: string
  grand_total: string
  note: string
  tags: string
  meta_data: string
  created_at: string
  updated_at: string
  items: ProductModel[]
}

export interface OrderCreateRequestModel {
  customer_first_name: string
  customer_email: string
  customer_phone: string
  customer_company_name: string
  note: string
  items: CartItemModel[]
}

export interface OrderCreateResponseModel {
  message: string
  order_id: string
}
