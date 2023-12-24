import { privateRouter, removeToken } from 'common'
import { ICLogout } from 'assets'
import NavbarItem from './NavbarItem'
import { useNavigate } from 'react-router-dom'
import { Logo } from 'components'

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeToken()
    navigate('/')
  }
  return (
    <div className="min-h-[calc(100vh_-_120px)] min-w-[240px] pb-12 flex flex-col gap-y-1 border-t-4 border-t-black border-r border-r-__bg_gray_2">
      <div className="w-full bg-black py-5 px-3 flex justify-center">
        <Logo />
      </div>
      {privateRouter
        .filter((_) => !_?.isHidden)
        .map((item, index) => {
          return <NavbarItem key={index} item={item} />
        })}
      <div
        className="cursor-pointer py-2 hover:bg-__bg_gray mt-6"
        onClick={() => {
          removeToken()
        }}
      >
        <div className="px-5 w-full flex flex-row gap-x-2 items-center cursor-pointer" onClick={handleLogout}>
          <div className="w-6">
            <ICLogout />
          </div>
          <h4>Đăng xuất</h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar
