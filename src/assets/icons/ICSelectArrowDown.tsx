import { colors } from 'common'
import type { IconModel } from 'models'

export const ICSelectArrowDown = ({ color = colors._d9d, width = 24, height = 24, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_88_421)">
        <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill={color} />
        <path
          d="M7 9.71318C7 9.53514 7.06791 9.3571 7.20374 9.22081C7.47598 8.94882 7.91654 8.94882 8.18878 9.22081L11.9914 13.02L15.8108 9.20399C16.083 8.932 16.5236 8.932 16.7958 9.20399C17.0681 9.47599 17.0681 9.91616 16.7958 10.1882L12.4842 14.4965C12.3536 14.627 12.1765 14.7001 11.9914 14.7001C11.8062 14.7001 11.6297 14.627 11.4986 14.4965L7.20316 10.205C7.06791 10.0693 7 9.89122 7 9.71318Z"
          fill="#1A1A1A"
        />
      </g>
      <defs>
        <clipPath id="clip0_88_421">
          <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)" />
        </clipPath>
      </defs>
    </svg>
  )
}
