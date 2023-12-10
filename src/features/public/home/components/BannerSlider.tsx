import { SLIDERS } from 'common'
import { Slider } from 'components'
import React from 'react'

export const BannerSlider = () => {
  return (
    <Slider
      pagination
      list={SLIDERS.map((slider, index) => {
        return <img className="w-full" src={slider} key={index} />
      })}
    />
  )
}
