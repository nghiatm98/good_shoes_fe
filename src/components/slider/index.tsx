import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ISliderProps {
  list?: JSX.Element[]
  spaceBetween?: number
  modules?: any[]
  pagination?: boolean
}

export function Slider({ list = [], spaceBetween = 0, modules = [], pagination = false }: ISliderProps) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={spaceBetween}
      loop
      effect={'fade'}
      pagination={
        pagination
          ? {
              clickable: false
            }
          : undefined
      }
      navigation
      modules={[Pagination, ...modules]}
      className="mySwiper"
    >
      {list.map((slider, index) => {
        return <SwiperSlide key={index}>{slider}</SwiperSlide>
      })}
    </Swiper>
  )
}
