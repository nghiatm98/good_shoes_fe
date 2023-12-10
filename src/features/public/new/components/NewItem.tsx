import { ImageTranslation } from 'components'
import type { NewModel } from 'models'
import React from 'react'

interface INewItemProps {
  detail: NewModel
}

export const NewItem = ({ detail }: INewItemProps) => {
  return (
    <div className="bg-white flex flex-col gap-5 shadow-sm rounded-xl overflow-hidden">
      <ImageTranslation src={detail.image} className='rounded-xl'/>
      <div className="flex flex-col justify-center gap-5">
        <p className="text-_36 font-semibold line-clamp-2">{detail.title}</p>
        <p className='line-clamp-[8] text-_14'>{detail.description}</p>
        <p className="italic text-_14">{detail.time}</p>
      </div>
    </div>
  )
}
