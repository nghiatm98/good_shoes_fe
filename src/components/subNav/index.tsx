import clsx from 'clsx'
import { TextNotFound } from 'components/TextNotFound'
import { useNavigateWithQueryParams } from 'hooks'
import type { RouterModel } from 'models'

interface ISubNavProps {
  list: RouterModel[] | undefined
  field: string
  notActive?: boolean
  id?: string | number
}

export const SubNav = ({ list = [], field = '', notActive = false, id = '' }: ISubNavProps) => {
  const handleClick = (item: RouterModel) => {
    if (item?.onClick) {
      item.onClick(id)
      return
    }
    if (item.value === queryParam?.[field]) {
      handleRemoveQuery({ field, path: item.path, value: item.value || '' })
      return
    }
    handleChangeQuery([{ field, path: item.path, value: item.value || '' }])
  }
  const { queryParam, handleChangeQuery, handleRemoveQuery } = useNavigateWithQueryParams()

  return (
    <div
      className="absolute z-20 top-full min-w-full w-auto bg-_000_6 rounded-md h-0 overflow-hidden transition-all duration-500 sub-nav text-white"
      style={{
        ['--length-sub-nav' as string]: list?.length
      }}
    >
      {list?.length ? list?.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className={clsx('px-2 whitespace-nowrap h-10 flex items-center hover:bg-white hover:text-black transition-all duration-300', {
              'rounded-t-md': !index,
              'rounded-b-md': index + 1 === list?.length,
              'bg-white text-black': item?.value === queryParam?.[field] && !notActive
            })}
          >
            {item.label}
          </div>
        )
      }) : <TextNotFound label='Không có dữ liệu' />}
    </div>
  )
}
