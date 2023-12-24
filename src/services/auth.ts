import { apiPath } from 'common'
import type { AuthModel, LoginResponseModel, UserInfoModel } from 'models'
import { api } from './api'

export const AuthService = {
  login: async (data: AuthModel): Promise<LoginResponseModel> => {
    return api.post(apiPath.login, data)
  },
  getInfo: async (): Promise<UserInfoModel> => {
    return api.get(apiPath.user + '?user=admin')
  }
}
