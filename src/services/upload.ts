import { apiPath } from 'common'
import { api } from './api'

interface UploadResponseModel {
  message: string
  url: string[]
}

export const UploadService = {
  upload: async (body: any): Promise<UploadResponseModel> => {
    return api.post(apiPath.uploads, body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}
