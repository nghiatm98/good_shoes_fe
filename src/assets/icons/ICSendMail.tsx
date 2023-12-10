import { colors } from 'common'
import type { IconModel } from 'models'

export const ICSendMail = ({ color = colors._fff, width = 24, height = 25, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 25" fill="none">
      <g clipPath="url(#clip0_88_601)">
        <circle cx="12" cy="12.9727" r="12" fill="#1A1A1A" />
        <path
          d="M9.71318 17.9727C9.53514 17.9727 9.3571 17.9047 9.22081 17.7689C8.94882 17.4967 8.94882 17.0561 9.22081 16.7839L13.02 12.9813L9.20399 9.16187C8.932 8.88964 8.932 8.44907 9.20399 8.17683C9.47599 7.9046 9.91616 7.9046 10.1882 8.17683L14.4965 12.4885C14.627 12.6191 14.7001 12.7961 14.7001 12.9813C14.7001 13.1665 14.627 13.3429 14.4965 13.4741L10.205 17.7695C10.0693 17.9047 9.89122 17.9727 9.71318 17.9727Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_88_601">
          <rect width="24" height="24" fill={color} transform="translate(0 0.972656)" />
        </clipPath>
      </defs>
    </svg>
  )
}
