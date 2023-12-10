import { apiPath } from 'common'
import { api } from './api'
import type { ProductModel, ProductParamsModel } from 'models'

interface ProductPropsModel {
    params?: ProductParamsModel
}

export const ProductService = {
  getProducts: async ({ params = {} }: ProductPropsModel): Promise<{ items: ProductModel[] }> => {
    return api.get(apiPath.products, { params })
  }
}
