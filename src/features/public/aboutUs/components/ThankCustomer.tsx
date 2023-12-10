import { ICStar, IMThankCustomer_1, IMThankCustomer_2, IMThankCustomer_3, IMThankCustomer_4 } from 'assets'
import clsx from 'clsx'
import { ImageTranslation } from 'components'
import React from 'react'

const DATA = [
  {
    image: IMThankCustomer_1,
    title: 'Phúc Thành (Schannel)',
    description: 'Youtuber Phúc Thành đã tin tưởng và lựa chọn Giá đỡ Microphone HyperWork MA-02.'
  },
  {
    image: IMThankCustomer_2,
    title: 'Youtuber Tùng Phạm',
    description: 'Để refresh góc làm việc, giải trí tại nhà, Youtuber Tùng Phạm đã lựa chọn các phụ kiện của HyperWork làm những trợ thủ đắc lực.'
  },
  {
    image: IMThankCustomer_3,
    title: 'Youtuber / Tiktoker Giao Heo',
    description: 'Cảm ơn Youtuber / Tiktoker Giao Heo đã tin dùng sản phẩm của HyperWork!'
  },
  {
    image: IMThankCustomer_4,
    title: 'BTV Mạnh Cường (Gia đình truyền hình)',
    description: 'Cảm ơn Youtuber / Tiktoker Giao Heo đã tin dùng sản phẩm của HyperWork!'
  }
]

export const ThankCustomer = () => {
  return (
    <div className="py-16 container flex flex-col gap-y-14">
      <div className="flex flex-col gap-5 text-center">
        <p className="text-_64 font-semibold">Lời cảm ơn</p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {DATA.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx('flex flex-row gap-4', {
                '!flex-row-reverse': index % 2
              })}
            >
              <div className="rounded-xl flex-1 overflow-hidden">
                <ImageTranslation src={item.image} className="rounded-xl" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-center items-center text-center gap-5 bg-_e8e rounded-xl px-24 h-full">
                  <ICStar />
                  <p className="text-_32 font-semibold">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
