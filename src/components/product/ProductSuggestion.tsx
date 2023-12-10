import type { ProductModel } from 'models'
import { ProductCard } from './ProductCard'

interface IProductSuggestionProps {
  label: string
  products: ProductModel[]
}

export const ProductSuggestion = ({ label = '', products = [] }: IProductSuggestionProps) => {
  return (
    <div className="flex flex-col gap-y-8 container py-9">
      <span className='font-semibold text-_40 bg-[linear-gradient(180deg,_#ACACAC_0%,_#000_100%)] bg-clip-text top-product-title'>{label}</span>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => {
          return <ProductCard key={index} detail={product} />
        })}
      </div>
    </div>
  )
}
