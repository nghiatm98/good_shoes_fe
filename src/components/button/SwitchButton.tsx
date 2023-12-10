import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useNavigateWithQueryParams } from 'hooks'

interface ISwitchButtonProps {
  label: string
}

export const SwitchButton = ({ label }: ISwitchButtonProps) => {
  const { handleChangeQuery, queryParam } = useNavigateWithQueryParams()
  const [isChecked, setIsChecked] = useState(!!(queryParam.in_stock_only === 'true'))

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    handleChangeQuery([
      {
        field: 'in_stock_only',
        value: isChecked ? 'true' : 'false',
        path: '/products'
      }
    ])
  }, [isChecked])

  return (
    <div className="flex flex-row gap-x-3 items-center cursor-pointer">
      <span>{label}</span>
      <div
        className={clsx('w-10 rounded-full bg-_d9d h-5 flex items-center px-[3px] transition-all duration-300', {
          '!bg-_073': isChecked
        })}
        onClick={handleChange}
      >
        <div
          className={clsx('h-[14px] rounded-[50%] bg-white w-[14px] transition-all duration-300', {
            'translate-x-5': isChecked
          })}
        ></div>
      </div>
    </div>
  )
}
