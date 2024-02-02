import type { ProductModel } from 'models'
import { OutstandingProductCard } from './OutstandingProductCard'

interface IOutstandingProductProps {
  products: ProductModel[]
}

export const OutstandingProduct = ({ products = [] }: IOutstandingProductProps) => {
  return (
    <div className="my-9 grid grid-cols-4 gap-4 container">
      {products?.slice(0, 4).map((product, index) => {
        return <OutstandingProductCard key={index} detail={product} />
      })}
    </div>
  )
}
