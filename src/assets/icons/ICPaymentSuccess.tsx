import { colors } from 'common'
import type { IconModel } from 'models'

export const ICPaymentSuccess = ({ color = colors._128, width = 142, height = 141, className = '' }: IconModel) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 142 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="71" cy="70.5" r="70.5" fill={color} fillOpacity="0.6" />
      <path d="M108.5 48L63.125 93L42.5 72.5455" stroke="white" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
