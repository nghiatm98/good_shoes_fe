import { ICFace, IMHomeAboutUs } from 'assets'
import { Button, ImageTranslation } from 'components'
import React from 'react'

export const AboutUs = () => {
  return (
    <div className="py-16 bg-_f0f">
      <div className="container flex flex-row">
        <div className="p-14 flex-[7] bg-white rounded-l-lg text-center flex flex-col gap-8 items-center justify-center">
          <ICFace />
          <p className="text-_36 font-semibold">Đội ngũ Good shoes</p>
          <p>
            Luôn tìm tòi, phát triển sản phẩm mong muốn đem tới cho người Việt trải nghiệm hoàn toàn mới về một phong cách sống hiện đại và lành mạnh.
            Chúng tôi mang tới sản phẩm chất lượng - tiện lợi - an toàn nhất, tất cả sản phẩm đều có mức giá tốt và dễ tiếp cận đến mọi phân khúc thị
            trường.
          </p>
          <Button label="Tìm hiểu về good shoes" onClick={() => {}} />
        </div>
        <div className="flex-[4]">
          <ImageTranslation src={IMHomeAboutUs} className="rounded-r-lg" />
        </div>
      </div>
    </div>
  )
}
