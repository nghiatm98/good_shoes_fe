import { colors } from 'common'
import type { IconModel } from 'models'

export const ICPaymentError = ({ color = colors._eb5, width = 142, height = 141, className = '' }: IconModel) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 142 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71 141C109.936 141 141.5 109.436 141.5 70.5C141.5 31.5639 109.936 0 71 0C32.0639 0 0.5 31.5639 0.5 70.5C0.5 109.436 32.0639 141 71 141Z"
        fill={color}
        fillOpacity="0.6"
      />
      <path
        d="M55.1196 90.6751C54.1161 90.6751 53.1127 90.3054 52.3205 89.5133C50.789 87.9817 50.789 85.4467 52.3205 83.9152L82.2121 54.0237C83.7436 52.4921 86.2786 52.4921 87.8101 54.0237C89.3417 55.5552 89.3417 58.0902 87.8101 59.6217L57.9186 89.5133C57.1792 90.3054 56.123 90.6751 55.1196 90.6751Z"
        fill="white"
      />
      <path
        d="M85.0111 90.6751C84.0077 90.6751 83.0042 90.3054 82.2121 89.5133L52.3205 59.6217C50.789 58.0902 50.789 55.5552 52.3205 54.0237C53.8521 52.4921 56.387 52.4921 57.9186 54.0237L87.8101 83.9152C89.3417 85.4467 89.3417 87.9817 87.8101 89.5133C87.0179 90.3054 86.0145 90.6751 85.0111 90.6751Z"
        fill="white"
      />
    </svg>
  )
}