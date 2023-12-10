import clsx from 'clsx'
import React, { InputHTMLAttributes, forwardRef, memo } from 'react'

type ISendMailInputProps = {
  icon?: JSX.Element
  className?: string
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

export const SendMailInput = memo(
  forwardRef(({ icon, className, placeholder, ...props }: ISendMailInputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    return (
      <div className={clsx('h-12 flex items-center p-4 border border-white rounded-xl relative ' + className)}>
        <input ref={ref} autoComplete="off" {...props} className="flex-1 h-full outline-none bg-transparent" placeholder={placeholder} />
        {icon && <div className="absolute top-3 right-3 cursor-pointer">{icon}</div>}
      </div>
    )
  })
)
