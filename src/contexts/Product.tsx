import { NUMBER_OF_PAGE, filterUniqueElements } from 'common'
import type { OrderModel, ProductModel, ProductParamsModel, RouterModel } from 'models'
import qs from 'query-string'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import { OrderService, ProductService } from 'services'

interface ProductState {
  products: ProductModel[]
  productsFilter: ProductModel[]
  categoriesRouter: RouterModel[]
  brandsRouter: RouterModel[]
  orders: OrderModel[]
  onGetProducts: (params: ProductParamsModel) => Promise<void>
  onGetAllProducts: (params?: ProductParamsModel) => Promise<void>
}

export const ProductContext = createContext<ProductState>({
  products: [],
  productsFilter: [],
  categoriesRouter: [],
  brandsRouter: [],
  orders: [],
  onGetProducts: async () => {},
  onGetAllProducts: async () => {}
})

interface IProductProviderProps {
  children: ReactNode
}

export function ProductProvider({ children }: IProductProviderProps) {
  const queryParam: ProductParamsModel = qs.parse(location.search)
  const [products, setProducts] = useState<ProductModel[]>([])
  const [orders, setOrders] = useState<OrderModel[]>([])
  const [productsFilter, setProductsFilter] = useState<ProductModel[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [brands, setBrands] = useState<string[]>([])

  const onGetProducts = async (params: ProductParamsModel) => {
    try {
      const { items = [] } = await ProductService.getProducts({
        params: {
          page: 1,
          limit: NUMBER_OF_PAGE,
          ...params
        }
      })
      setProductsFilter(items)
    } catch (error) {}
  }

  const onGetAllProducts = async (params?: ProductParamsModel) => {
    try {
      const { items = [] } = await ProductService.getProducts({
        params: {
          ...params,
          page: 1,
          limit: 999999999
        }
      })
      setProducts(items)
      if (!params) {
        const categories = items.map((item) => {
          return item.category
        })
        const brands = items.map((item) => {
          return item.brand
        })
        setCategories(filterUniqueElements<string>(categories))
        setBrands(filterUniqueElements<string>(brands))
      }
    } catch (error) {}
  }

  const categoriesRouter = useMemo((): RouterModel[] => {
    return categories.map((category) => {
      return {
        label: category,
        path: '/products',
        value: category
      }
    })
  }, [categories])

  const brandsRouter = useMemo((): RouterModel[] => {
    return brands.map((brand) => {
      return {
        label: brand,
        path: '/products',
        value: brand
      }
    })
  }, [categories])

  const onGetOrders = async (params: ProductParamsModel) => {
    try {
      const { items } = await OrderService.getOrders({ page: 1, limit: 999999999, ...params })
      setOrders(items)
    } catch (error) {}
  }

  useEffect(() => {
    onGetOrders({})
    onGetAllProducts()
  }, [])

  useEffect(() => {
    onGetOrders(queryParam)
  }, [queryParam?.search])

  useEffect(() => {
    onGetProducts(queryParam)
    onGetAllProducts(queryParam)
  }, [queryParam?.category, queryParam?.brand, queryParam?.max_price, queryParam?.min_price, queryParam?.page])

  return (
    <ProductContext.Provider
      value={{
        products,
        productsFilter,
        categoriesRouter,
        brandsRouter,
        orders,
        onGetProducts,
        onGetAllProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
