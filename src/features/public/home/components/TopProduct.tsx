import clsx from 'clsx'
import { Button, ImageTranslation } from 'components'
import type { ProductModel } from 'models'
import { useNavigate } from 'react-router-dom'

interface ITopProductProps {
  products: ProductModel[]
}

export const TopProduct = ({ products = [] }: ITopProductProps) => {
  const navigate = useNavigate()
  return (
    <div className="bg-_f0f py-9 flex flex-col gap-y-9">
      <div className="container flex flex-col gap-9">
        <div className="flex flex-col gap-y-2 justify-center text-center">
          <p className="font-semibold text-_40 leading-[120%] bg-[linear-gradient(180deg,_#ACACAC_0%,_#000_100%)] bg-clip-text top-product-title">
            TOP Sản phẩm
          </p>
          <span className="text-_18 leading-[120%]">Các dải sản phẩm chính</span>
        </div>
        <div>
          {products?.slice(0, 4).map((product, index) => {
            return (
              <div
                key={index}
                className={clsx('flex flex-row', {
                  'flex-row-reverse': index % 2
                })}
              >
                <div className="flex-1 ">
                  <div className="p-14 text-center flex flex-col gap-4 items-center justify-center h-full">
                    <p className="text-_28 font-semibold">{product?.name}</p>
                    <div dangerouslySetInnerHTML={{ __html: product?.description }}></div>
                    <Button label="Xem sản phẩm" onClick={() => navigate("/products/" + product?.id)} />
                  </div>
                </div>
                <div className="flex-1">
                  <ImageTranslation src={product?.image_url?.split(',')?.[0]} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
