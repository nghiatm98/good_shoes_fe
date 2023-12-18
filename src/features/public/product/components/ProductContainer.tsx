import { IMGifAdidas } from 'assets'
import { ProductCard } from 'components'
import { TextNotFound } from 'components/TextNotFound'
import { ProductContext } from 'contexts'
import { useContext } from 'react'
import { FilterProduct } from './FilterProduct'

export const ProductContainer = () => {
  const { productsFilter } = useContext(ProductContext)
  return (
    <div className="container py-9 flex flex-col gap-6">
      <FilterProduct />
      {productsFilter?.length ? (
        <div className="grid grid-cols-4 gap-4">
          {productsFilter.slice(0, 4).map((product) => {
            return <ProductCard key={product?.id} detail={product} />
          })}
          <div className="col-span-2">
            <img src={IMGifAdidas} className="w-full rounded-2xl 3xl:aspect-[600/431] aspect-[608/466]" />
          </div>
          {productsFilter.slice(4).map((product) => {
            return <ProductCard key={product?.id} detail={product} />
          })}
        </div>
      ) : (
        <TextNotFound />
      )}
    </div>
  )
}
