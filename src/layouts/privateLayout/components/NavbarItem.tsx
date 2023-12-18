import clsx from 'clsx'
import type { IRouter } from 'common'
import { useLocation, useNavigate } from 'react-router'

interface INavBarItemProps {
  item: IRouter
}

const NavbarItem = ({ item }: INavBarItemProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <div
      className={clsx('cursor-pointer py-2 hover:bg-_e5e', {
        'mt-6': item.icon,
        'bg-_e5e': item.path === pathname.slice(7),
        'opacity-50': item?.disabled
      })}
      onClick={() => {
        if (item?.disabled) return
        navigate(`/manager/${item.path}`)
      }}
    >
      <div className="px-5 w-full flex flex-row gap-x-2 items-center">
        <div className="w-6"><item.icon /></div>
        <h4>{item.name}</h4>
      </div>
    </div>
  )
}

export default NavbarItem
