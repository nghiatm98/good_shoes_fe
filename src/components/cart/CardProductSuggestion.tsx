import { CartContext } from 'contexts'
import type { ProductModel } from 'models'
import React, { useContext } from 'react'

interface ICardProductSuggestionProps {
  detail: ProductModel
}

export const CardProductSuggestion = ({ detail }: ICardProductSuggestionProps) => {
  const { handleAddItemCart } = useContext(CartContext)
  return (
    <div className="flex flex-row justify-between items-center cursor-pointer gap-x-5">
      <div className="flex flex-row gap-4 items-center">
        <img src={detail.image_url ? detail.image_url.split(',')[0] : ''} className='h-24 w-24 rounded-md' />
        <div className="flex flex-col gap-1 text-_12 font-medium">
          <span className="font-bold">{detail.name}</span>
          <span>{detail.price}</span>
          <span>{detail?.description}</span>
        </div>
      </div>
      <div className="font-medium bg-_d9d h-[22px] rounded-[11px] flex justify-center items-center p-2 text-_12" onClick={() => handleAddItemCart(detail)}>+ Thêm</div>
    </div>
  )
}
