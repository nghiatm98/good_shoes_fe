import clsx from 'clsx'
import React from 'react'

interface IButtonProps {
  label: string
  className?: string
  onClick?: any
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button = ({ label, onClick = () => {}, className = '', type = 'button', disabled }: IButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        className +
          ' px-9 w-fit text-_20 font-bold text-white h-[69px] flag-animation bg-black rounded-l-full rounded-r-full flex items-center justify-center text-center relative overflow-hidden',
        {
          'bg-gray-500': disabled
        }
      )}
      onClick={() => !disabled && onClick()}
    >
      {label}
    </button>
  )
}
