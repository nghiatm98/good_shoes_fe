export interface LoginResponseModel {
  code: number
  expire: string
  token: string
}

export interface UserInfoModel {
  email: string
  image: string
  name: string
}
