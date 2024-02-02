import { LoadingComponent } from 'components'
import type { UserInfoModel } from 'models'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthService } from 'services'

interface AuthState {
  userInfo: UserInfoModel
  onGetUserInfor: () => void
}

export const AuthContext = createContext<AuthState>({
  userInfo: {} as UserInfoModel,
  onGetUserInfor: () => {}
})

interface IAuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const navigate = useNavigate()
  const pathname = window.location.pathname;
  const [loading, setLoading] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<UserInfoModel>({} as UserInfoModel)
  const onGetUserInfor = async () => {
    try {
      setLoading(true)
      const response = await AuthService.getInfo()
      setUserInfo(response)
    } catch (error) {
      setUserInfo({} as UserInfoModel)
      if (pathname.includes('manager')) {
        navigate('/')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    onGetUserInfor()
  }, [])

  if (loading) return <LoadingComponent />
  return (
    <AuthContext.Provider
      value={{
        userInfo,
        onGetUserInfor
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
