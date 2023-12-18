import { colors } from 'common'
import type { IconModel } from 'models'

export const ICShowPassword = ({ color = colors._e6e, width = 24, height = 24, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M2.54175 3L6.13091 6.58916M20.5417 21L16.9529 17.4112M13.4166 18.8246C12.8095 18.9398 12.1829 19 11.5422 19C7.06455 19 3.27425 16.0571 2 12C2.3469 10.8955 2.88026 9.87361 3.56318 8.97118M9.42043 9.87868C9.96332 9.33579 10.7133 9 11.5417 9C13.1986 9 14.5417 10.3431 14.5417 12C14.5417 12.8284 14.206 13.5784 13.6631 14.1213M9.42043 9.87868L13.6631 14.1213M9.42043 9.87868L6.13091 6.58916M13.6631 14.1213L6.13091 6.58916M13.6631 14.1213L16.9529 17.4112M6.13091 6.58916C7.69073 5.58354 9.54831 5 11.5422 5C16.0198 5 19.8101 7.94291 21.0844 12C20.3775 14.2507 18.8963 16.1585 16.9529 17.4112"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
