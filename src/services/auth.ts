import { apiPath } from 'common'
import type { AuthModel } from 'models'
import { api } from './api'

interface LoginResponseModel {
  code: number
  expire: string
  token: string
}

export const AuthService = {
  login: async (data: AuthModel): Promise<LoginResponseModel> => {
    return api.post(apiPath.login, data)
  }
}
