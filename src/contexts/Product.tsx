import { filterUniqueElements, isEmptyObject } from 'common'
import type { ProductModel, ProductParamsModel, RouterModel } from 'models'
import qs from 'query-string'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import { OrderService, ProductService } from 'services'

interface ProductState {
  products: ProductModel[]
  productsFilter: ProductModel[]
  categoriesRouter: RouterModel[]
  brandsRouter: RouterModel[]
}

export const ProductContext = createContext<ProductState>({
  products: [],
  productsFilter: [],
  categoriesRouter: [],
  brandsRouter: []
})

interface IProductProviderProps {
  children: ReactNode
}

export function ProductProvider({ children }: IProductProviderProps) {
  const queryParam: ProductParamsModel = qs.parse(location.search)
  const [products, setProducts] = useState<ProductModel[]>([])
  const [productsFilter, setProductsFilter] = useState<ProductModel[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [brands, setBrands] = useState<string[]>([])

  const onGetProducts = async (params: ProductParamsModel) => {
    try {
      const { items = [] } = await ProductService.getProducts({ params })
      setProductsFilter(items)
    } catch (error) {
      console.log(error)
    }
  }

  const onGetAllProducts = async() => {
    try {
        const res = await OrderService.getOrders()
        console.log(res)
        const { items = [] } = await ProductService.getProducts({})
        setProducts(items)
      } catch (error) {
        console.log(error)
      }
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

  useEffect(() => {
    onGetAllProducts()
  }, [])

  useEffect(() => {
    onGetProducts(queryParam)
  }, [queryParam?.category, queryParam?.brand, queryParam?.max_price, queryParam?.min_price])

  return (
    <ProductContext.Provider
      value={{
        products,
        productsFilter,
        categoriesRouter,
        brandsRouter
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
