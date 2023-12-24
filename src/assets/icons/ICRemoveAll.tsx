import { colors } from 'common'
import type { IconModel } from 'models'

export const ICRemoveAll = ({ color = colors._969, width = 24, height = 24, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.9983 17.9966C15.3111 17.9966 17.9966 15.3111 17.9966 11.9983C17.9966 8.68553 15.3111 6 11.9983 6C8.68553 6 6 8.68553 6 11.9983C6 15.3111 8.68553 17.9966 11.9983 17.9966Z"
        fill={color}
      />
      <path
        d="M13.0319 11.9983L14.3663 10.6639C14.6508 10.3793 14.6508 9.91533 14.3663 9.63083C14.0818 9.34632 13.6178 9.34632 13.3333 9.63083L11.9988 10.9653L10.6644 9.63083C10.3799 9.34632 9.91585 9.34632 9.63135 9.63083C9.34684 9.91533 9.34684 10.3793 9.63135 10.6639L10.9658 11.9983L9.63135 13.3328C9.34684 13.6173 9.34684 14.0813 9.63135 14.3658C9.91585 14.6503 10.3799 14.6503 10.6644 14.3658L11.9988 13.0313L13.3333 14.3658C13.6178 14.6503 14.0818 14.6503 14.3663 14.3658C14.6508 14.0813 14.6508 13.6173 14.3663 13.3328L13.0319 11.9983Z"
        fill="white"
      />
    </svg>
  )
}