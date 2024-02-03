import { ProductOptionTypeModel, type ProductModel, type ProductParamsModel } from 'models'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductService } from 'services'
import { ProductDetailFilter } from './ProductDetailFilter'
import { ProductImageList } from './ProductImageList'
import { LoadingComponent } from 'components'
import qs from 'query-string'

export const ProductDetailMain = () => {
  const params = useParams()
  const queryParam: ProductParamsModel = qs.parse(location.search)

  const [productDetail, setProductDetail] = useState<ProductModel>({} as ProductModel)

  const onGetProductDetail = async () => {
    try {
      const response = await ProductService.getProductDetail(params?.id ?? '', {
        color: queryParam.color,
        size: queryParam.size
      })
      setProductDetail(response)
    } catch (error) {
    }
  }

  useEffect(() => {
    onGetProductDetail()
  }, [queryParam.color, queryParam.size])

  const productImages = useMemo((): string[] => {
    if (!queryParam?.color) return productDetail.image_url ? productDetail.image_url.split(',') : []
    const image_url = productDetail.options?.find((option) => option.type === ProductOptionTypeModel.COLOR)?.items.find((i) => i.label === queryParam.color)?.image_url
    return image_url ? image_url.split(',') : []
  }, [productDetail])

  return (
    <div className="container py-16 flex flex-row gap-x-20">
      <ProductImageList images={productImages} />
      <ProductDetailFilter productDetail={productDetail} />
    </div>
  )
}
