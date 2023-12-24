import { ICArrowDown, ICCart, ICSearch, ICUser } from 'assets'
import clsx from 'clsx'
import { HEADERS } from 'common'
import { Cart, Logo, SubNav } from 'components'
import { AuthContext, ModalContext, ProductContext } from 'contexts'
import LoginPage from 'features/common/Login'
import { useContext, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface HeaderIconModel {
  id: number
  icon: JSX.Element
  onClick?: () => void
  element?: JSX.Element
  information?: JSX.Element
}

export const Header = () => {
  const { pathname } = useLocation()
  const { setElementModal, isShow } = useContext(ModalContext)
  const { categoriesRouter } = useContext(ProductContext)
  const { userInfo } = useContext(AuthContext)
  const HEADER_ICONS = useMemo(
    (): HeaderIconModel[] => [
      {
        id: 1,
        icon: userInfo.image ? <img alt="" src={userInfo.image} className="h-8 w-8 rounded-[50%] translate-y-[3px]" /> : <ICUser />,
        onClick: () => {
          if (userInfo.email) return navigate("/manager/products")
          setElementModal(<LoginPage />)
        }
      },
      {
        id: 2,
        icon: <ICCart />,
        element: <Cart />
      }
    ],
    []
  )
  const navigate = useNavigate()

  return (
    <div
      className={clsx('h-[120px] bg-_000_6 fixed top-0 py-10 px-5 w-full flex items-center text-white z-[20] flag-animation transition-all', {
        'pr-9': isShow,
        'bg-black': pathname !== '/'
      })}
    >
      <div className="container flex flex-row justify-between items-center">
        <Logo />
        <div className="flex flex-row gap-20 h-10">
          {HEADERS(categoriesRouter).map((header) => {
            const hasSub = header?.childrens?.length
            return (
              <div key={header.path} className="cursor-pointer flex items-center gap-1 relative group nav">
                <span onClick={() => navigate(header.path)} onKeyDown={() => {}}>
                  {header.label}
                </span>
                {hasSub ? <ICArrowDown className="group-hover:rotate-180 transition-all duration-500" /> : null}
                {hasSub ? <SubNav list={header?.childrens} field="category" /> : null}
              </div>
            )
          })}
        </div>
        <div className="flex flex-row items-center">
          {HEADER_ICONS.map((item) => {
            return (
              <div key={item.id} className="relative group" onClick={() => item?.onClick?.()} onKeyDown={() => {}}>
                <div className="cursor-pointer">{item.icon}</div>
                {item?.element ? item.element : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
