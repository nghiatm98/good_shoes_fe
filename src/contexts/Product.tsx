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
}

export const ProductContext = createContext<ProductState>({
  products: [],
  productsFilter: [],
  categoriesRouter: [],
  brandsRouter: [],
  orders: []
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

  const onGetAllProducts = async () => {
    try {
      const { items = [] } = await ProductService.getProducts({
        params: {
          page: 1,
          limit: 999999999
        }
      })
      setProducts(items)
    } catch (error) {}
  }

  const onGetFilterList = () => {
    const categories = products.map((item) => {
      return item.category
    })
    const brands = products.map((item) => {
      return item.brand
    })
    setCategories(filterUniqueElements<string>(categories))
    setBrands(filterUniqueElements<string>(brands))
  }

  useEffect(() => {
    onGetFilterList()
  }, [products])

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
    return brands.map((crand) => {
      return {
        label: crand,
        path: '/products',
        value: crand
      }
    })
  }, [categories])

  const onGetOrders = async () => {
    try {
      const { items } = await OrderService.getOrders()
      setOrders(items)
    } catch (error) {}
  }

  useEffect(() => {
    onGetAllProducts()
    onGetOrders()
  }, [])

  useEffect(() => {
    onGetProducts(queryParam)
  }, [queryParam?.category, queryParam?.brand, queryParam?.max_price, queryParam?.min_price, queryParam?.page])

  return (
    <ProductContext.Provider
      value={{
        products,
        productsFilter,
        categoriesRouter,
        brandsRouter,
        orders
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}