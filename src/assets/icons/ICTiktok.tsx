import { colors } from 'common'
import type { IconModel } from 'models'

export const ICTiktok = ({ color = colors._fff, width = 47, height = 48, className = '' }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 47 48" fill="none">
      <path
        d="M24.6231 12.9727C25.8813 12.9727 27.0923 12.9727 28.3646 12.9727C28.3646 13.1332 28.3596 13.2907 28.3656 13.4462C28.3927 14.1827 28.3375 14.9342 28.4699 15.6516C28.796 17.4195 30.3342 18.6857 32.1282 18.747C32.7884 18.769 33.4506 18.751 34.165 18.751C34.165 19.3961 34.165 20.0032 34.165 20.6112C34.165 21.2222 34.165 21.8333 34.165 22.4704C32.1452 22.5768 30.1857 22.5477 28.3425 21.3888C28.3425 21.6115 28.3425 21.755 28.3425 21.8975C28.3365 24.5263 28.3766 27.1551 28.3124 29.7818C28.2261 33.3498 25.2271 36.5344 21.6802 36.9207C17.5986 37.3652 14.122 34.923 13.1899 30.9558C12.1925 26.7126 15.2427 22.2848 19.5632 21.754C20.5354 21.6346 21.5267 21.6657 22.5271 21.6266C22.5271 22.9219 22.5271 24.141 22.5271 25.4052C21.8558 25.4052 21.2077 25.3871 20.5605 25.4082C18.3802 25.4805 16.7126 27.2484 16.7528 29.4286C16.7889 31.4213 18.4274 33.139 20.3899 33.2414C22.5221 33.3528 24.309 31.913 24.5709 29.8651C24.607 29.5812 24.6221 29.2922 24.6221 29.0052C24.6251 23.836 24.6241 18.6667 24.6241 13.4974C24.6231 13.3359 24.6231 13.1743 24.6231 12.9727Z"
        fill={color}
      />
    </svg>
  )
}