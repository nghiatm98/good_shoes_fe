import { ICArrowRight } from 'assets'
import clsx from 'clsx'
import { NUMBER_OF_PAGE, colors } from 'common'
import { usePagination } from 'hooks'
import React from 'react'

interface IPaginationProps {
  totalItems: number
  pageSize?: number
}

export const Pagination = ({ totalItems = 0, pageSize = NUMBER_OF_PAGE }: IPaginationProps) => {
  const { currentPage, handleNextPage, handlePrevPage, disabledNextPage, disabledPrevPage, totalPage } = usePagination({ totalItems, pageSize })

  if (totalItems <= pageSize) return <></>
  return (
    <div className="min-w-[151px] h-12 mt-5 rounded-full border border-_d9d w-fit px-6 flex flex-row items-center justify-between mx-auto">
      <ICArrowRight
        className={clsx('rotate-180 cursor-pointer', {
          '!cursor-not-allowed': disabledPrevPage
        })}
        color={disabledPrevPage ? colors._d9d : colors._1a1}
        onClick={() => !disabledPrevPage && handlePrevPage()}
      />
      <span className="font-gilroy tracking-wider">
        {currentPage}/{totalPage}
      </span>
      <ICArrowRight
        className={clsx('cursor-pointer', {
          '!cursor-not-allowed': disabledNextPage
        })}
        color={disabledNextPage ? colors._d9d : colors._1a1}
        onClick={() => !disabledNextPage && handleNextPage()}
      />
    </div>
  )
}
