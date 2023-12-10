import { colors } from 'common'
import type { IconModel } from 'models'

export const ICHiddenPassword = ({ color = colors._808, width = 24, height = 24, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M14.5422 12C14.5422 13.6569 13.1991 15 11.5422 15C9.88536 15 8.54221 13.6569 8.54221 12C8.54221 10.3431 9.88536 9 11.5422 9C13.1991 9 14.5422 10.3431 14.5422 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
