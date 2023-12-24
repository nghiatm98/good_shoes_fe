import { ProductSuggestion } from 'components'
import { ProductDetailMain } from './components'

const ProductDetailPage = () => {
  return (
    <div>
      <ProductDetailMain />
      <ProductSuggestion label="Bạn cũng có thể thích" />
    </div>
  )
}

export default ProductDetailPage
