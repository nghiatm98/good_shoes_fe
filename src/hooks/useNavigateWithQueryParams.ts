import type { ProductParamsModel } from 'models'
import qs from 'query-string'
import { useNavigate } from 'react-router-dom'

interface ChangeQueryModel {
  field: string
  path?: string
  value: string | number
}

export const useNavigateWithQueryParams = () => {
  const navigate = useNavigate()
  const queryParam: ProductParamsModel = qs.parse(location.search)

  const handleChangeQuery = (arr: ChangeQueryModel[]) => {
    let newQueryParam: ProductParamsModel = queryParam
    arr.forEach((item) => {
      const { field, value } = item
      newQueryParam = {
        ...newQueryParam,
        [field]: value
      }
    })

    navigate({
      pathname: arr[0].path,
      search: qs.stringify(newQueryParam)
    })
  }

  const handleRemoveQuery = (item: ChangeQueryModel) => {
    const { field } = item
    const newQueryParam: ProductParamsModel = { ...queryParam }
    delete newQueryParam?.[field]

    navigate({
      pathname: window.location.pathname,
      search: qs.stringify(newQueryParam)
    })
  }

  return {
    queryParam,
    handleChangeQuery,
    handleRemoveQuery
  }
}
