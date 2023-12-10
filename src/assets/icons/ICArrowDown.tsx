import { colors } from 'common'
import type { IconModel } from 'models'

export const ICArrowDown = ({ color = colors._fff, width = 11, height = 10, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 11 10" fill="none">
      <path d="M9.5 3L5.5 7L1.5 3L9.5 3Z" fill={color} />
    </svg>
  )
}
