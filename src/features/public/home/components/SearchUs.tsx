import { Button } from 'components'
import React from 'react'

export const SearchUs = () => {
  return (
    <div className="bg-black text-white">
      <div className="container flex flex-col text-center gap-y-5 py-16 justify-center items-center">
        <p className='text-_60 font-medium'>Tìm Good Shoes?</p>
        <p className='text-_20'>Danh sách các Cửa hàng/Online Store có các sản phẩm của Good shoes.</p>
        <Button label="Xem cửa hàng" className="!bg-_073" />
      </div>
    </div>
  )
}
