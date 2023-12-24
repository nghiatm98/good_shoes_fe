import { colors } from 'common'
import type { IconModel } from 'models'

export const ICInstagram = ({ color = colors._fff, width = 47, height = 48, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 47 48" fill="none">
      <path
        d="M34.8567 17.809C34.495 15.4747 33.3366 13.7111 31.1344 12.7161C30.2479 12.3157 29.3023 12.1292 28.3357 12.0826C25.0179 11.9228 21.6992 11.9609 18.3805 12.0398C17.1382 12.0693 15.9139 12.2291 14.7746 12.7685C12.85 13.6797 11.726 15.2198 11.2746 17.2725C11.0189 18.432 11.0065 19.6144 11.0027 20.7901C10.9922 23.3737 11.0141 25.9572 11.0418 28.5407C11.0552 29.7973 11.2193 31.0348 11.7651 32.1858C12.641 34.0359 14.1143 35.1593 16.0933 35.6426C17.0351 35.8728 17.996 35.9108 18.9588 35.9346C19.1057 35.9384 19.2527 35.9593 19.4006 35.9717C21.8128 35.9717 24.225 35.9717 26.6372 35.9717C27.2059 35.9403 27.7746 35.9156 28.3433 35.8775C29.9798 35.7672 31.4931 35.3239 32.7498 34.2129C33.9092 33.1874 34.5542 31.8824 34.8099 30.3775C34.8891 29.9105 34.913 29.4339 34.9636 28.9621C34.9721 28.8784 34.9893 28.7947 35.0017 28.711C35.0017 25.4939 35.0017 22.2769 35.0017 19.0599C34.9531 18.6423 34.9216 18.2228 34.8567 17.809ZM32.8261 28.1831C32.8128 28.9507 32.7508 29.7355 32.5676 30.4784C32.1153 32.3142 30.8634 33.3777 29.0132 33.6098C27.6592 33.7801 26.2813 33.7629 24.913 33.8124C24.2718 33.8352 23.6286 33.8162 22.9865 33.8162C22.9865 33.8286 22.9855 33.8409 22.9855 33.8533C21.2641 33.8105 19.5418 33.781 17.8204 33.7201C16.9531 33.6897 16.1086 33.5052 15.35 33.0609C14.1391 32.3523 13.4884 31.2479 13.3529 29.8934C13.2202 28.5607 13.1849 27.2147 13.1706 25.8735C13.1496 23.9301 13.162 21.9849 13.2069 20.0415C13.226 19.2111 13.2765 18.3636 13.4597 17.5569C13.8672 15.7534 15.0695 14.6871 16.8777 14.396C17.9149 14.2295 18.9807 14.2029 20.0351 14.1905C22.2899 14.1639 24.5456 14.1687 26.8004 14.201C27.642 14.2134 28.4969 14.2619 29.3195 14.4264C31.2393 14.8098 32.4435 16.1158 32.6868 18.0516C32.8071 19.0094 32.8548 19.9806 32.8605 20.9471C32.8767 23.3575 32.8672 25.7707 32.8261 28.1831Z"
        fill={color}
      />
      <path
        d="M23.0306 17.8214C19.6279 17.8033 16.8445 20.5657 16.834 23.971C16.8235 27.3641 19.5974 30.135 23.0124 30.1426C26.418 30.1502 29.1976 27.3783 29.1937 23.9777C29.1899 20.5771 26.4495 17.8395 23.0306 17.8214ZM23.0086 27.9728C20.7911 27.97 19.0096 26.1903 19.0115 23.9796C19.0124 21.768 20.7939 19.9902 23.0105 19.9883C25.2386 19.9864 27.0268 21.7728 27.0201 23.9929C27.0124 26.2045 25.2281 27.9757 23.0086 27.9728Z"
        fill={color}
      />
      <path
        d="M29.4132 16.1428C28.6193 16.1552 27.9934 16.7963 28.0001 17.5915C28.0058 18.3858 28.6651 19.024 29.4686 19.0126C30.2586 19.0022 30.8865 18.3553 30.8789 17.5601C30.8693 16.7544 30.2243 16.1295 29.4132 16.1428Z"
        fill={color}
      />
    </svg>
  )
}