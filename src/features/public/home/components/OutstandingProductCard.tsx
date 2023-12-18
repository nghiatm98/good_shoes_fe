import { ImageTranslation } from 'components'
import type { ProductModel } from 'models'

interface IOutstandingProductCardProps {
  detail: ProductModel
}

export const OutstandingProductCard = ({ detail }: IOutstandingProductCardProps) => {
  return (
    <div className="w-full aspect-[1/1] relative flex">
      <ImageTranslation src={detail?.image_url} className="w-full rounded-md" />
      <div className="absolute bottom-5 left-5 text-white flex flex-col gap-2">
        <span className="font-bold text-_14">{detail?.category}</span>
        <span className="text-_18">{detail?.brand}</span>
      </div>
    </div>
  )
}
