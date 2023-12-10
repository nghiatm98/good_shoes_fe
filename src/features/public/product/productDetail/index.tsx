import { ProductSuggestion } from 'components'
import { ProductContext } from 'contexts'
import { useContext } from 'react'
import { ProductDetailMain } from './components'

const ProductDetailPage = () => {
  const { products } = useContext(ProductContext)
  return (
    <div>
      <ProductDetailMain />
      <ProductSuggestion label="Bạn cũng có thể thích" products={products} />
    </div>
  )
}

export default ProductDetailPage
