import { ICRemoveAll } from 'assets'
import React, { ChangeEvent } from 'react'

interface IInputProps {
  label: string
  placeholder?: string
  removeAll?: boolean
  icon?: JSX.Element
  className?: string
  type?: 'text' | 'password' | 'number'
  onClickIcon?: () => void
  name?: string
  required?: boolean
  error?: boolean
  errorMessage?: string
  value?: string
  onChange?: (event: ChangeEvent) => void
  onRemoveAll?: () => void
}

export const Input = ({
  label,
  icon,
  placeholder,
  removeAll,
  className,
  type = 'text',
  onClickIcon = () => {},
  name = '',
  error,
  errorMessage = '',
  required,
  value,
  onChange = () => {},
  onRemoveAll = () => {}
}: IInputProps) => {
  return (
    <div className={'flex flex-col gap-1 ' + className}>
      {label && (
        <label className="text-_494 font-light text-left">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative flex items-center w-full">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="h-14 border rounded-md px-5 py-3 w-full focus-visible:outline-_073/[.2] pr-[90px] placeholder:text-_969"
          placeholder={placeholder}
        ></input>
        {icon && (
          <div className="absolute right-14 cursor-pointer" onClick={onClickIcon}>
            {icon}
          </div>
        )}
        {removeAll && (
          <div className="absolute right-6 cursor-pointer" onClick={onRemoveAll}>
            <ICRemoveAll />
          </div>
        )}
      </div>
      {error ? <span className="text-red-500 text-_14 text-left mt-1">{errorMessage}</span> : null}
    </div>
  )
}
