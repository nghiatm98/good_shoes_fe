import React from 'react'
import { ProductImageList } from './ProductImageList'
import { ProductDetailFilter } from './ProductDetailFilter'

export const ProductDetailMain = () => {
  return (
    <div className="container py-16 flex flex-row gap-x-20">
      <ProductImageList />
      <ProductDetailFilter />
    </div>
  )
}
