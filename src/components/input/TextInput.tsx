import clsx from 'clsx'
import { ERROR_MESSAGES } from 'common'

interface ITextInputProps {
  field?: string
  placeholder?: string
  type?: string
  errorMessage?: string
  value: string | number
  onChange: (e: any) => void
  className?: string
  disabled?: boolean
  error?: boolean
  required?: boolean
  label: string
}

const TextInput = ({
  field,
  placeholder,
  type,
  errorMessage = ERROR_MESSAGES.required,
  value,
  onChange,
  className = '',
  disabled = false,
  error = false,
  required = true,
  label
}: ITextInputProps) => {
  return (
    <div className="relative z-0 w-full">
      <h4 className="3xl:text-_16 mb-2 3xl:top-0 flex flex-row cursor-text text-main">
        {label || ''}
        <span style={{ display: required ? 'initial' : 'none' }} className="text-red-600 ml-1 -translate-y-[6px]">
          *
        </span>
      </h4>
      <input
        type={type}
        disabled={disabled}
        onChange={onChange}
        name={field}
        value={value}
        placeholder={placeholder}
        id={`input ${field}`}
        className={clsx(
          `${
            className + ' '
          } border-[1px] rounded-md w-full pr-2 pl-2 text-main block py-1.5 px-0 border-blue-500 appearance-none dark:focus:border-blue-500 focus:outline-blue-400 focus:border-blue-600 mb-0`,
          {
            'cursor-not-allowed': disabled
          }
        )}
      />
      {error && <h5 className="text-red-600 mt-1 h-4">{errorMessage}</h5>}
    </div>
  )
}

export default TextInput
