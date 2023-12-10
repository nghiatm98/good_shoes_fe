import { ICFacebook, ICInstagram, ICSendMail, ICTiktok, IMNotifycation, IMRegister } from 'assets'
import { FOOTER_ROUTERS } from 'common'
import { Logo } from 'components'
import { ProductContext } from 'contexts'
import { SendMailInput } from 'layouts'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const SOCIALS = [<ICFacebook key={1} />, <ICInstagram key={2} />, <ICTiktok key={3} />]
export const LOGOS = [IMNotifycation, IMRegister]

export const Footer = () => {
  const navigate = useNavigate()
  const { categoriesRouter } = useContext(ProductContext)
  return (
    <div className="bg-black w-full py-16 text-white font-gilroy">
      <div className="container flex flex-col gap-y-4">
        <div className=" flex flex-row gap-10">
          <div className="flex-1">
            <div className="flex flex-col gap-9">
              <Logo />
              <div className="flex flex-col gap-5">
                <span>Nhận thông tin/khuyến mại</span>
                <SendMailInput placeholder="Email" className="w-[324px]" icon={<ICSendMail />} />
              </div>
            </div>
          </div>
          {FOOTER_ROUTERS(categoriesRouter).map((item) => {
            return (
              <div key={item.label} className="flex-1 flex flex-col gap-10">
                <span className="font-semibold">{item.label}</span>
                <div className="flex flex-col">
                  {item.childrens.map((child) => {
                    return (
                      <div className="cursor-pointer leading-8" onClick={() => navigate(child.path)} onKeyDown={() => {}} key={child?.label}>
                        {child.label}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
            {SOCIALS.map((social) => {
              return (
                <div key={social?.key} className="cursor-pointer">
                  {social}
                </div>
              )
            })}
          </div>
          <div>
            © 2023, good shoes. Công ty cổ phần dịch vụ và thương mại good shoes Việt Nam. Giấy chứng nhận Đăng ký kinh doanh số: 0109193000 đăng ký
            tại Sở Kế Hoạch Đầu Tư Thành Phố Hà Nội cấp ngày: 21-5-2023. <br /> Địa chỉ: Số 11, Đường 1, Vinhomes time city, P. Vĩnh Tuy, Hai Bà
            Trưng, Hà Nội <br /> - TP. Hà Nội: 091.128.000 <br /> - TP. Hồ Chí Minh: 091.867.000
          </div>
          <div className="flex flex-row gap-3">
            {LOGOS.map((logo) => {
              return (
                <div key={logo}>
                  <img src={logo} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
