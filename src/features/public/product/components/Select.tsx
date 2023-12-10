import { ICSelectArrowDown } from 'assets'
import { SubNav } from 'components'
import type { RouterModel } from 'models'
import React from 'react'

interface ISelectProps {
  label: string
  list: RouterModel[]
  field: string
}

export const Select = ({ label, list = [], field = '' }: ISelectProps) => {
  return (
    <div className="flex flex-row items-center gap-x-3 cursor-pointer relative nav h-10 group">
      <label className="font-semibold">{label}</label>
      <ICSelectArrowDown className='group-hover:rotate-180 transition-all duration-500' />
      <SubNav list={list} field={field} />
    </div>
  )
}
