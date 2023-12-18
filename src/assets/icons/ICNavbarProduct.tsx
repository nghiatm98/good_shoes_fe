import { colors } from 'common'
import type { IconModel } from 'models'

export const ICNavbarProduct = ({ color = colors._f0c, width = 27, height = 27, className = '' }: IconModel) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.4458 4.68945H5.8208C5.19948 4.68945 4.6958 5.19313 4.6958 5.81445V23.8145C4.6958 24.4358 5.19948 24.9395 5.8208 24.9395H20.4458C21.0671 24.9395 21.5708 24.4358 21.5708 23.8145V5.81445C21.5708 5.19313 21.0671 4.68945 20.4458 4.68945Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.75781 2.25195V5.62695M16.5078 2.25195V5.62695M8.63281 10.6895H17.6328M8.63281 15.1895H15.3828M8.63281 19.6895H13.1328"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
