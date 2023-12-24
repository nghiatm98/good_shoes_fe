import { colors } from 'common'
import type { IconModel } from 'models'

export const ICDelete = ({ color = colors._f53, width = 10, height = 11, className = '' }: IconModel) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.875 11C1.53125 11 1.23687 10.8802 0.991875 10.6407C0.746875 10.4011 0.624583 10.1135 0.625 9.77778V1.83333H0V0.611111H3.125V0H6.875V0.611111H10V1.83333H9.375V9.77778C9.375 10.1139 9.2525 10.4017 9.0075 10.6413C8.7625 10.8808 8.46833 11.0004 8.125 11H1.875ZM8.125 1.83333H1.875V9.77778H8.125V1.83333ZM3.125 8.55555H4.375V3.05556H3.125V8.55555ZM5.625 8.55555H6.875V3.05556H5.625V8.55555Z"
        fill={color}
      />
    </svg>
  )
}
