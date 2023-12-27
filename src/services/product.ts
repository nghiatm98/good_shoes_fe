import { apiPath } from 'common'
import { api } from './api'
import type { ProductCreateRequestModel, ProductModel, ProductParamsModel } from 'models'

interface ProductPropsModel {
  params?: ProductParamsModel
}

interface ProductChildrentPropsModel {
  params?: {
    product_parent_id?: string
  }
}

export const ProductService = {
  getProducts: async ({ params = {} }: ProductPropsModel): Promise<{ items: ProductModel[] }> => {
    return api.get(apiPath.products, { params })
  },
  getProductDetail: async (id: string, params?: ProductParamsModel): Promise<ProductModel> => {
    return api.get(apiPath.products + '/' + id, { params })
  },
  createProduct: async (data: ProductCreateRequestModel): Promise<ProductModel> => {
    return api.post(apiPath.products, data)
  },
  editProduct: async (id: string, data: ProductCreateRequestModel): Promise<ProductModel> => {
    return api.put(apiPath.products + '/' + id, data)
  },
  deleteProduct: async (id: string | number): Promise<ProductModel> => {
    return api.delete(apiPath.products + '/' + id)
  },
  getProductChildren: async ({ params = {} }: ProductChildrentPropsModel): Promise<{ items: ProductModel[] }> => {
    return api.get(apiPath.products, { params })
  },
}
