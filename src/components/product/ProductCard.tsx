import { formatNumberDot } from 'common'
import { ImageTranslation } from 'components/image'
import type { ProductModel } from 'models'
import { useNavigate } from 'react-router-dom'

interface IProductCardProps {
  detail: ProductModel
}

export const ProductCard = ({ detail }: IProductCardProps) => {
  const navigate = useNavigate()
  return (
    <div className="w-full cursor-pointer flex flex-col" onClick={() => navigate("/products/" + detail?.id)}>
      <ImageTranslation src={detail.image_url ? detail.image_url.split(',')[0] : ''} className='flex-1' />
      <div className="bg-_d9d rounded-lg p-5 flex flex-col gap-y-2 line-clamp-1">
        <span className="text-_18">{detail?.name}</span>
        <span className="text-_14 font-bold">{detail?.category}</span>
        <span className="text-_14 font-medium">{formatNumberDot(detail?.price)} VNĐ</span>
      </div>
    </div>
  )
}
