import clsx from 'clsx'
import { Button } from 'components'
import { useState } from 'react'

const IMAGES = [
  'https://png.pngtree.com/png-clipart/20231008/original/pngtree-athletic-sneakers-transparent-background-png-image_13290686.png',
  'https://img.bitas.com.vn/sanpham/ZGOM.11/NVY/lg1.png'
]

const SIZES = ['EU 40', 'EU 40.5', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46']

export const ProductDetailFilter = () => {
  const [indexSelect, setIndexSelect] = useState(0)
  const [sizeSelect, setSizeSelect] = useState(0)
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div>
        <p className="text-_40 font-semibold">Nike Zoom Fly 5</p>
        <p className="text-_20 font-semibold mt-2 mb-6">Giày chạy bộ</p>
        <div className="flex flex-row gap-x-5 items-center">
          <span className="text-_20 font-semibold">3,994,149 VNĐ</span>
          <span className="font-semibold text-_a8a line-through">4,699,00 VNĐ</span>
          <span className="text-_20 font-semibold text-_128">15% off</span>
        </div>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {IMAGES.map((image, index) => {
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
      <div className="flex flex-col gap-y-3">
        <span className="font-semibold text-_20">Select size</span>
        <div className="grid grid-cols-4 gap-2">
          {SIZES.map((size, index) => {
            return (
              <div
                className={clsx(
                  'min-w-[160px] h-14 rounded-xl text-_20 flex justify-center items-center cursor-pointer hover:border-2 hover:border-black',
                  {
                    'border-2 border-black': sizeSelect === index
                  }
                )}
                key={index}
                onClick={() => setSizeSelect(index)}
              >
                {size}
              </div>
            )
          })}
        </div>
        
      </div>
      <Button label='Thêm giỏ hàng' className='!bg-black !w-full' />
    </div>
  )
}
