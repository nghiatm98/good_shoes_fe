import clsx from 'clsx'
import { TextNotFound } from 'components/TextNotFound'
import { useNavigateWithQueryParams } from 'hooks'
import type { RouterModel } from 'models'

interface ISubNavProps {
  list: RouterModel[] | undefined
  field: string
}

export const SubNav = ({ list = [], field = '' }: ISubNavProps) => {
  const { queryParam, handleChangeQuery } = useNavigateWithQueryParams()

  return (
    <div
      className="absolute top-full min-w-full w-auto bg-_000_6 rounded-md h-0 overflow-hidden transition-all duration-500 sub-nav text-white"
      style={{
        ['--length-sub-nav' as string]: list?.length
      }}
    >
      {list?.length ? list?.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleChangeQuery([{ field, path: item.path, value: item.value || '' }])}
            className={clsx('px-2 whitespace-nowrap h-10 flex items-center hover:bg-white hover:text-black transition-all duration-300', {
              'rounded-t-md': !index,
              'rounded-b-md': index + 1 === list?.length,
              'bg-white text-black': item?.value === queryParam?.[field]
            })}
          >
            {item.label}
          </div>
        )
      }) : <TextNotFound label='Không có dữ liệu' />}
    </div>
  )
}
