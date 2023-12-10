import React, { useRef, MouseEvent, memo } from 'react'

interface IImageTranslationProps {
    src: string
    className?: string
}

export const ImageTranslation = memo(({ src, className = '' }: IImageTranslationProps) => {
  const refImage = useRef<HTMLImageElement>(null)
  const refOffsetTop = useRef<number>(0)
  const refOffsetLeft = useRef<number>(0)

  const handleMouseEnter = (e: MouseEvent<HTMLImageElement>) => {
    const { top, left } = e.currentTarget.getBoundingClientRect()
    refOffsetTop.current = top + window.scrollY
    refOffsetLeft.current = left
  }

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    const { pageX, pageY } = e
    const offsetX = pageX - refOffsetLeft.current
    const offsetY = pageY - refOffsetTop.current

    refImage.current!.style.transition = 'all 0.25s ease'
    refImage.current!.style.transformOrigin = `${offsetX}px ${offsetY}px`
  }

  const handleMouseOut = () => {
    refImage.current!.style.transition = 'all 0.25s cubic-bezier(0.77, 0, 0.175, 1)'
  }

  return (
    <div className="overflow-hidden w-full flex-1">
      <img
        ref={refImage}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
        className={"w-full object-cover h-full image_hover " + className}
        src={src}
        alt=""
      />
    </div>
  )
})
