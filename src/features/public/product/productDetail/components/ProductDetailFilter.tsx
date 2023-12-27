import clsx from 'clsx'
import { calculatePercentage, formatNumberDot } from 'common'
import { Button } from 'components'
import { CartContext } from 'contexts'
import { useNavigateWithQueryParams } from 'hooks'
import { ProductOptionTypeModel, type ProductModel } from 'models'
import { useContext, useMemo, useState } from 'react'

interface IProductDetailFilterProps {
  productDetail: ProductModel
}

export const ProductDetailFilter = ({ productDetail }: IProductDetailFilterProps) => {
  const { handleChangeQuery, queryParam } = useNavigateWithQueryParams()
  const sizes = useMemo(() => {
    const sizeOption = productDetail?.options?.find((option) => option.type === ProductOptionTypeModel.SIZE)
    if (!sizeOption) return []
    return sizeOption.items
  }, [productDetail])

  const colors = useMemo(() => {
    const colorOption = productDetail?.options?.find((option) => option.type === ProductOptionTypeModel.COLOR)
    if (!colorOption) return []
    return colorOption.items
  }, [productDetail])

  const { handleAddItemCart } = useContext(CartContext)

  return (
    <div className="flex-1 flex flex-col gap-6">
      <div>
        <p className="text-_40 font-semibold">{productDetail.name}</p>
        <p className="text-_20 font-semibold mt-2 mb-6">{productDetail.category}</p>
        <div className="flex flex-row gap-x-5 items-center">
          <span className="text-_20 font-semibold">{formatNumberDot(productDetail.sale_price ?? '')} VNĐ</span>
          <span className="font-semibold text-_a8a line-through">{formatNumberDot(productDetail.price)} VNĐ</span>
          <span className="text-_20 font-semibold text-_128">{calculatePercentage(productDetail.sale_price ?? '', productDetail.price)}% off</span>
        </div>
      </div>
      <div>
        <p>Số lượng còn lại: <span className='text-_128'>{productDetail.total_quantity}</span></p>
      </div>
      {sizes.length ? (
        <div className="flex flex-col gap-y-3">
          <span className="text-_20">Select color:</span>
          <div className="flex flex-row gap-x-3">
            {colors.map((color, index) => {
              return (
                <div
                  onClick={() =>
                    handleChangeQuery([
                      {
                        field: 'color',
                        value: color.label
                      }
                    ])
                  }
                  key={index}
                  className={clsx('h-10 w-10 rounded-[50%] p-1 cursor-pointer hover:border hover:border-_494 flex justify-center items-center', {
                    'border border-_494': queryParam.color === color.label
                  })}
                >
                  <div className="h-8 w-8 rounded-[50%]" style={{ backgroundColor: color.value }}></div>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}
      {sizes.length ? (
        <div className="flex flex-col gap-y-3">
          <span className="text-_20">Select size:</span>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size, index) => {
              return (
                <div
                  className={clsx(
                    'min-w-[160px] h-14 rounded-xl text-_20 flex justify-center items-center cursor-pointer hover:border-2 hover:border-black',
                    {
                      'border-2 border-black': queryParam.size === size.label
                    }
                  )}
                  key={index}
                  onClick={() => handleChangeQuery([
                    {
                      field: 'size',
                      value: size.label
                    }
                  ])}
                >
                  {size.label}
                </div>
              )
            })}
          </div>
        </div>
      ) : null}

      <div color="mt-10">
        <Button
          label={productDetail.total_quantity ? 'Thêm giỏ hàng' : 'Đã hết hàng'}
          className="!bg-black !w-full"
          disabled={!productDetail.total_quantity}
          onClick={() =>
            handleAddItemCart({
              ...productDetail
              // size: sizes[indexSizeSelect].value,
              // color: colors[indexColorSelect].value
            })
          }
        />
      </div>
    </div>
  )
}
