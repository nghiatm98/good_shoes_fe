import React from 'react'
import { ProductContainer } from './components'
import { Banner, RegisterPromotion } from 'components'
import { IMBannerProduct } from 'assets'

const ProductPage = () => {
  return (
    <div>
      <Banner title='Top bán chạy' image={IMBannerProduct} />
      <ProductContainer />
      <RegisterPromotion />
    </div>
  )
}

export default ProductPage
