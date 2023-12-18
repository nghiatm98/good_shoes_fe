import { apiPath } from 'common'
import { api } from './api'
import type { ProductCreateRequestModel, ProductModel, ProductParamsModel } from 'models'

interface ProductPropsModel {
  params?: ProductParamsModel
}

export const ProductService = {
  getProducts: async ({ params = {} }: ProductPropsModel): Promise<{ items: ProductModel[] }> => {
    return api.get(apiPath.products, { params })
  },
  getProductDetail: async (id: string): Promise<ProductModel> => {
    return api.get(apiPath.products + '/' + id)
  },
  createProduct: async (data: ProductCreateRequestModel): Promise<ProductModel> => {
    return api.post(apiPath.products, data)
  },
  editProduct: async (id: string, data: ProductCreateRequestModel): Promise<ProductModel> => {
    return api.put(apiPath.products + '/' + id, data)
  },
  deleteProduct: async (id: string | number): Promise<ProductModel> => {
    return api.delete(apiPath.products + '/' + id)
  }
}
