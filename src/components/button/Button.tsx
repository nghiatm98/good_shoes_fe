import React from 'react'

interface IButtonProps {
  label: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button = ({ label, onClick = () => {}, className = '', type = 'button' }: IButtonProps) => {
  return (
    <button
      type={type}
      className={
        className +
        ' px-9 w-fit text-_20 font-bold text-white h-[69px] flag-animation bg-black rounded-l-full rounded-r-full flex items-center justify-center text-center relative overflow-hidden'
      }
      onClick={onClick}
    >
      {label}
    </button>
  )
}
