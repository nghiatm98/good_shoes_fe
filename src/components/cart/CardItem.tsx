import { CartContext } from 'contexts'
import type { CartItemModel, ProductModel } from 'models'
import React, { useContext } from 'react'

interface ICardItemProps {
  detail: CartItemModel
  index: number
}

export const CardItem = ({ detail, index }: ICardItemProps) => {
  const { handleRemoveItemCart } = useContext(CartContext)
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        <img src={detail.image_url} className='h-24 w-24 rounded-md' />
        <div className="flex flex-col gap-1 text-_12 font-medium">
          <span className="font-bold">{detail.name}</span>
          <span>{detail.price}</span>
          <span>{detail?.description}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="px-3 rounded border flex items-center justify-center border-black">{detail.quantity}</div>
        <span className="cursor-pointer underline outline-offset-4 text-_14" onClick={() => handleRemoveItemCart(index)}>Gỡ bỏ</span>
      </div>
    </div>
  )
}
