import clsx from 'clsx'
import React from 'react'
import { MultiRangeSlider } from './multipleRangeSlider'
import { ICSelectArrowDown } from 'assets'
import { Button } from './button'

interface IPriceFilterProps {
  title: string
  minValue: number
  maxValue: number
  min: number
  max: number
  step: number
  onChange: Function
  type: string
  onSearch: () => void
}

export function PriceFilter({ title, minValue, maxValue, min, max, step, onChange, type, onSearch }: Readonly<IPriceFilterProps>) {
  return (
    <div className="group relative">
      <div className="flex flex-row items-center gap-x-3 cursor-pointer relative nav h-10">
        <label className="font-semibold">{title}</label>
        <ICSelectArrowDown className="group-hover:rotate-180 transition-all duration-500" />
      </div>
      <div
        className={clsx('hidden group-hover:block z-10 absolute lg:left-0 top-[calc(100%_+_16px)] bg-white rounded-md p-4  border border-gray-100', {
          '-left-14': type != 'price',
          'left-0': type == 'price'
        })}
        style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <div
          className={clsx('absolute  lg:left-6 -top-2.5 w-5 h-5 rotate-45 border-t border-l ', {
            'left-20': type != 'price',
            'left-6': type == 'price'
          })}
        ></div>
        <div className="absolute left-0 bottom-full w-full h-5  "></div>
        <div className="w-64 h-6 mt-4 bg-white">
          <MultiRangeSlider
            minValue={minValue}
            maxValue={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={onChange}
            type={type}
            className="text-text text-wap-regular2 lg:text-normal z-20"
          />
        </div>
        <div className="mt-3">
          <Button label="Lọc kết quả" className="!h-8 !text-_12 !w-fit !mx-auto" onClick={onSearch} />
        </div>
      </div>
    </div>
  )
}
