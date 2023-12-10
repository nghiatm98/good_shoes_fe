import { IMHotNew } from 'assets'
import { ImageTranslation } from 'components'
import type { NewModel } from 'models'
import React from 'react'

const HOT_NEW: NewModel = {
  image: IMHotNew,
  title: 'Nike zoom sắp cho ra mắt sản phẩm mới...',
  description:
    'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
  time: 'Oct 26, 2023'
}

export const HotNew = () => {
  return (
    <div className="container py-16">
      <div className="flex flex-row">
        <div className="flex-[13]">
          <ImageTranslation src={HOT_NEW.image} className="rounded-l-lg" />
        </div>
        <div className="px-14 break-words flex-[9] flex flex-col justify-center gap-10">
          <p className="text-_48 font-semibold">{HOT_NEW.title}</p>
          <p>{HOT_NEW.description}</p>
          <p className="italic">{HOT_NEW.time}</p>
        </div>
      </div>
    </div>
  )
}
