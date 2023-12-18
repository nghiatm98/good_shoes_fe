import { apiPath } from 'common'
import type { OrderCreateRequestModel, OrderCreateResponseModel, OrderModel } from 'models'
import { api } from './api'

export const OrderService = {
  getOrders: async (): Promise<{ items: OrderModel[] }> => {
    return api.get(apiPath.orders)
  },

  updateOrderStatus: async (id: string | number): Promise<any> => {
    return api.put(apiPath.orders + `/${id}/status`)
  },
  createOrder: async (data: OrderCreateRequestModel): Promise<OrderCreateResponseModel> => {
    return api.post(apiPath.orders, data)
  }
}
