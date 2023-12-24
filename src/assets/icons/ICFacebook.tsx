import { colors } from 'common'
import type { IconModel } from 'models'

export const ICFacebook = ({ color = colors._fff, width = 47, height = 48, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 47 48" fill="none">
      <path
        d="M18.0009 20.7558C18.7705 20.7558 19.5243 20.7558 20.3456 20.7558C20.3456 20.5306 20.3395 20.3482 20.3465 20.1668C20.3947 19.0045 20.3272 17.8221 20.5227 16.6843C20.9022 14.4693 22.5291 13.0984 24.7818 13.0028C26.2053 12.9424 27.634 12.9915 29.0821 12.9915C29.0821 14.3632 29.0821 15.6991 29.0821 17.1015C28.6499 17.1015 28.2169 17.1015 27.7848 17.1015C27.3614 17.1015 26.9372 17.098 26.5138 17.1024C25.7661 17.1112 25.3901 17.4364 25.3629 18.1753C25.3322 19.0036 25.3559 19.8346 25.3559 20.7278C26.6216 20.7278 27.8663 20.7278 29.1724 20.7278C29.0225 22.1784 28.8805 23.559 28.7332 24.9842C27.6121 24.9842 26.5086 24.9842 25.3577 24.9842C25.3577 29.0005 25.3577 32.9713 25.3577 36.9727C23.6703 36.9727 22.0312 36.9727 20.3439 36.9727C20.3439 32.9739 20.3439 29.004 20.3439 24.9991C19.5418 24.9991 18.7871 24.9991 18 24.9991C18.0009 23.5774 18.0009 22.189 18.0009 20.7558Z"
        fill={color}
      />
    </svg>
  )
}