import { ImageTranslation } from 'components'

interface IBannerProductProps {
  image: string
  className?: string
  title: string
  description?: string
}

export const Banner = ({ image = '', className = '', title, description }: IBannerProductProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <ImageTranslation src={image} />
      <div className="absolute flex flex-col gap-5 justify-center items-center">
        <span className={'text-_90 font-semibold font-gilroy text-white ' + className}>{title}</span>
        {description && <span className='font-medium'>{description}</span>}
      </div>
    </div>
  )
}
