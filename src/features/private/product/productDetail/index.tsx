
import { LoadingComponent } from 'components'
import { useParams } from 'react-router-dom'
import { ProductService } from 'services'
import ProductDetail from './ProductDetail'
import { useEffect, useState } from 'react'
import type { ProductModel } from 'models'

export enum InputTypeModel {
  TEXT,
  EDITOR
}

const WrapperProductDetail = () => {
  const params = useParams()
  const [loading, setLoading] = useState<boolean>(false)
  const [productChildren, setProductChildren] = useState<ProductModel[]>([])
  const [productDetail, setProductDetail] = useState<ProductModel>({} as ProductModel)

  const onGetProductDetail = async () => {
    try {
      setLoading(true)
      const response = await ProductService.getProductDetail(params?.id ?? '')
      setProductDetail(response)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const onGetProductChildren = async() => {
    try {
      if (!params?.id) return
      const { items } = await ProductService.getProductChildren({
        params: {
          product_parent_id: params?.id ?? ''
        }
      })
      setProductChildren(items)
    } catch (error) {}
  }

  useEffect(() => {
    onGetProductDetail()
    onGetProductChildren()
  }, [])

  if (loading) return <LoadingComponent />

  return (
    <ProductDetail productDetail={productDetail} productChildren={productChildren} />
  )
}

export default WrapperProductDetail
