import { useEffect, useMemo, useState } from 'react'
import qs from 'query-string'
import { useNavigate } from 'react-router-dom'
import { NUMBER_OF_PAGE } from 'common'

interface IUsePaginationProps {
  totalItems: number
  pageSize?: number
}

export const usePagination = ({ totalItems, pageSize = NUMBER_OF_PAGE }: IUsePaginationProps) => {
  const queryParam = qs.parse(location.search)
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<number>(+(queryParam?.page || 1))

  const totalPage = useMemo(() => {
    return Math.ceil(totalItems / pageSize)
  }, [totalItems, pageSize])

  const disabledNextPage = useMemo(() => {
    return currentPage === totalPage
  }, [currentPage, totalPage])

  const disabledPrevPage = useMemo(() => {
    return currentPage === 1
  }, [currentPage, totalPage])

  const newQueryParam = useMemo(() => {
    if (currentPage === 1) {
      delete queryParam?.page
      return queryParam
    }
    return {
      ...queryParam,
      page: currentPage
    }
  }, [currentPage])

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleNavigate = () => {
    console.log(newQueryParam)
    navigate({
      search: qs.stringify(newQueryParam)
    })
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    handleNavigate()
  }, [currentPage])

  return {
    handleNextPage,
    handlePrevPage,
    currentPage,
    totalPage,
    disabledNextPage,
    disabledPrevPage
  }
}
