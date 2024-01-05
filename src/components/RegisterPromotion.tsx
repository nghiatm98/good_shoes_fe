import { IMRegisterPromotion } from 'assets'
import { Button, ImageTranslation } from 'components'
import { SendMailInput } from 'layouts'
import React from 'react'

export const RegisterPromotion = () => {
  return (
    <div className="bg-black flex flex-row font-gilroy text-white">
      <div className="flex-[2]">
        <ImageTranslation src={IMRegisterPromotion} />
      </div>
      <div className="flex-[3] p-14 flex flex-col gap-y-6 justify-center">
        <p className="text-_32 font-bold">Đăng ký & Giảm 5%</p>
        <p className="text-_14">Đăng ký nhận tin để nhận nhiều ưu đãi. Giảm ngay 5% đơn hàng đầu tiên khi quý khách nhập Email.</p>
        {/* <div className="flex flex-row gap-4">
          <SendMailInput placeholder="E-mail" className="w-[280px]" />
          <Button className="!bg-_073 !h-12" label="Đăng ký" />
        </div> */}
      </div>
    </div>
  )
}
