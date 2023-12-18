import type { ProductModel } from 'models'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductService } from 'services'
import { ProductDetailFilter } from './ProductDetailFilter'
import { ProductImageList } from './ProductImageList'
import { LoadingComponent } from 'components'

export const ProductDetailMain = () => {
  const params = useParams()

  const [productDetail, setProductDetail] = useState<ProductModel>({} as ProductModel)
  const [loadng, setLoading] = useState<boolean>(false)

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

  useEffect(() => {
    onGetProductDetail()
  }, [])

  const productImages = useMemo((): string[] => {
    return [productDetail.image_url]
  }, [productDetail])

  if (loadng) {
    return <LoadingComponent />
  }

  return (
    <div className="container py-16 flex flex-row gap-x-20">
      <ProductImageList images={productImages} />
      <ProductDetailFilter productDetail={productDetail} images={productImages} />
    </div>
  )
}
