import { IMBannerNew } from 'assets'
import { Banner } from 'components'
import React from 'react'
import { HotNew, New } from './components'

const NewPage = () => {
  return (
    <div>
      <Banner
        image={IMBannerNew}
        title="Tin tức"
        description="Đăng ký nhận tin để nhận nhiều ưu đãi. Giảm ngay 5% đơn hàng đầu tiên khi quý khách nhập Email."
        className="!text-_64 !text-black"
      />
      <HotNew />
      <New />
    </div>
  )
}

export default NewPage
