import clsx from 'clsx'
import { calculatePercentage, formatNumberDot } from 'common'
import { Button } from 'components'
import { CartContext } from 'contexts'
import { ProductOptionTypeModel, type ProductModel } from 'models'
import { useContext, useMemo, useState } from 'react'

interface IProductDetailFilterProps {
  productDetail: ProductModel
  images?: string[]
}

export const ProductDetailFilter = ({ productDetail, images = [] }: IProductDetailFilterProps) => {
  const [indexSelect, setIndexSelect] = useState(0)
  const [sizeSelect, setSizeSelect] = useState('')
  const { handleAddItemCart } = useContext(CartContext)

  const sizes = useMemo(() => {
    const sizeOption = productDetail?.options?.find((option) => option.type === ProductOptionTypeModel.SIZE)
    if (!sizeOption) return []
    return sizeOption.items
  }, [productDetail])
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div>
        <p className="text-_40 font-semibold">{productDetail.name}</p>
        <p className="text-_20 font-semibold mt-2 mb-6">{productDetail.category}</p>
        <div className="flex flex-row gap-x-5 items-center">
          <span className="text-_20 font-semibold">{formatNumberDot(productDetail.price)} VNĐ</span>
          <span className="font-semibold text-_a8a line-through">{formatNumberDot(productDetail.sale_price)} VNĐ</span>
          <span className="text-_20 font-semibold text-_128">{calculatePercentage(productDetail.sale_price, productDetail.price)}% off</span>
        </div>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              onClick={() => setIndexSelect(index)}
              className={clsx('w-[88px] h-[88px] rounded-xl  cursor-pointer', {
                'border-2 border-_d9d': index === indexSelect
              })}
            />
          )
        })}
      </div>
      {sizes.length ? (
        <div className="flex flex-col gap-y-3">
          <span className="text-_20">Select size</span>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size, index) => {
              return (
                <div
                  className={clsx(
                    'min-w-[160px] h-14 rounded-xl text-_20 flex justify-center items-center cursor-pointer hover:border-2 hover:border-black',
                    {
                      'border-2 border-black': sizeSelect === size.value
                    }
                  )}
                  key={index}
                  onClick={() => setSizeSelect(size.value)}
                >
                  {size.label}
                </div>
              )
            })}
          </div>
        </div>
      ) : null}

      <div color='mt-10'>
        <Button
          label={productDetail.total_quantity ? 'Thêm giỏ hàng' : 'Đã hết hàng'}
          className="!bg-black !w-full"
          disabled={!productDetail.total_quantity}
          onClick={() => handleAddItemCart(productDetail)}
        />
      </div>
    </div>
  )
}
