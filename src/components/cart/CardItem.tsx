import type { ProductModel } from 'models'
import React from 'react'

interface ICardItemProps {
  detail: ProductModel
}

export const CardItem = ({ detail }: ICardItemProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        <img src={detail.image_url} />
        <div className="flex flex-col gap-1 text-_12 font-medium">
          <span className="font-bold">{detail.name}</span>
          <span>{detail.price}</span>
          <span>{detail?.description}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="px-3 rounded border flex items-center justify-center border-black">1</div>
        <span className="cursor-pointer underline outline-offset-4 text-_14">Gỡ bỏ</span>
      </div>
    </div>
  )
}
