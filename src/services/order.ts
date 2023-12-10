import { apiPath } from 'common'
import { api } from './api'
import type { ProductModel } from 'models'

export const OrderService = {
  getOrders: async (): Promise<{ items: ProductModel[] }> => {
    return api.get(apiPath.orders)
  }
}
