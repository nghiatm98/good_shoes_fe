import type { ProductModel } from 'models'
import { useEffect, useState } from 'react'
import { ProductService } from 'services'

export const useProduct = () => {
    const [products, setProducts] = useState<ProductModel[]>([])

  const onGetProducts = async () => {
    try {
      const response = await ProductService.getProducts({})
      if (!response?.items) return
      setProducts(response?.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onGetProducts()
  }, [])

  return { products }
}