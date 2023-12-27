import { colors } from 'common'
import type { IconModel } from 'models'

export const ICArrowRight = ({ color = colors._1a1, width = 7, height = 10, className = '', onClick }: IconModel) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} onClick={() => onClick && onClick()} viewBox="0 0 7 10" fill="none">
      <path
        d="M1.21318 10C1.03514 10 0.857098 9.93209 0.720812 9.79626C0.44882 9.52402 0.44882 9.08346 0.720812 8.81122L4.52 5.00863L0.703994 1.18922C0.432002 0.91698 0.432002 0.476412 0.703994 0.204176C0.975986 -0.0680588 1.41616 -0.0680588 1.68815 0.204176L5.99652 4.51582C6.12701 4.64643 6.20008 4.82347 6.20008 5.00863C6.20008 5.1938 6.12701 5.37026 5.99652 5.50144L1.70497 9.79684C1.56926 9.93209 1.39122 10 1.21318 10Z"
        fill={color}
      />
    </svg>
  )
}
