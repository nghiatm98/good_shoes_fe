import { apiPath } from 'common'
import type { OrderCreateRequestModel, OrderCreateResponseModel, OrderModel, OrderStatusModel } from 'models'
import { api } from './api'

interface OrderUpdateStatusRequestModel {
  status: OrderStatusModel
}

export const OrderService = {
  getOrders: async (params?: any): Promise<{ items: OrderModel[] }> => {
    return api.get(apiPath.orders, { params })
  },

  updateOrderStatus: async (id: string | number, data: OrderUpdateStatusRequestModel): Promise<any> => {
    return api.put(apiPath.orders + `/${id}/status`, data)
  },
  createOrder: async (data: OrderCreateRequestModel): Promise<OrderCreateResponseModel> => {
    return api.post(apiPath.orders, data)
  },
  getOrderDetail: async (id: string | number): Promise<OrderModel> => {
    return api.get(apiPath.orders + '/' + id)
  },
}
