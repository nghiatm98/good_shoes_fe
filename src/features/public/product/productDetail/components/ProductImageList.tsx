import clsx from 'clsx'
import { ImageTranslation } from 'components'
import React, { useState } from 'react'

const IMAGES = [
  'https://png.pngtree.com/png-clipart/20231008/original/pngtree-athletic-sneakers-transparent-background-png-image_13290686.png',
  'https://img.bitas.com.vn/sanpham/ZGOM.11/NVY/lg1.png'
]

export const ProductImageList = () => {
  const [indexSelect, setIndexSelect] = useState(0)
  return (
    <div className="flex-1 flex flex-row gap-x-10">
      <div className="flex flex-col gap-y-5 min-w-[88px]">
        {IMAGES.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              onClick={() => setIndexSelect(index)}
              className={clsx('h-[88px] w-[88px] cursor-pointer rounded-md transition-all duration-300', {
                'bg-_d9d': index === indexSelect
              })}
            />
          )
        })}
      </div>
      <div className="min-h-[625px] bg-_f5f rounded-xl">
        <ImageTranslation src={IMAGES[indexSelect]} className="transition-all duration-500 rounded-xl" />
      </div>
    </div>
  )
}
