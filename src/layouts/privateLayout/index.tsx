import { removeToken } from 'common'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { OrderService } from 'services'
import Navbar from './components/Navbar'

export const PrivateLayout = () => {
  const navigate = useNavigate()
  const onGetOrders = async () => {
    try {
      await OrderService.getOrders()
    } catch (error: any) {
      removeToken()
      navigate('/')
    }
  }

  useEffect(() => {
    onGetOrders()
  }, [])
  return (
    <div className="w-full relative">
      <div className="flex flex-row">
        <Navbar />
        <div className="p-10 w-full">
          <Outlet />
        </div>
      </div>
    </div>

  )
}
