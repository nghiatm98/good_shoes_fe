import { memo } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { UploadService } from 'services/upload'

type Props = {
  value: string
  onChange?: (field: string, value: string) => void
  required?: boolean
  label?: string
  error?: boolean
  errorMessage?: string
  field?: string
}

export const Editor = memo(({ value, onChange, label, required = true, error, errorMessage , field = '' }: Props) => {
  return (
    <div  className='w-full'>
      <h4 className="3xl:text-_16 mb-2 3xl:top-0 flex flex-row cursor-text text-main">
        {label ?? ''}
        <span style={{ display: required ? 'initial' : 'none' }} className="text-red-600 ml-1 -translate-y-[6px]">
          *
        </span>
      </h4>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={(editor: any) => {
          MyCustomUploadAdapterPlugin(editor)
        }}
        onChange={(_: any, editor: any) => {
          const data = editor.getData()
          onChange?.(field, data)
        }}
      />
      {error && <h5 className="text-red-600 mt-1 h-4">{errorMessage}</h5>}
    </div>
  )
})

class MyUploadAdapter {
  public loader
  constructor(loader: any) {
    this.loader = loader
  }

  upload() {
    return this.loader.file.then(async (file: any) => {
      const formData = new FormData()
      formData.append('file', file)
      const image = await UploadService.upload(formData)
      return new Promise((rj) => {
        rj({
          urls: {
            default: image ? image.url : ''
          }
        })
      })
    })
  }

  abort() {}
}

function MyCustomUploadAdapterPlugin(editor: any) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
    // Configure the URL to the upload script in your back-end here!
    return new MyUploadAdapter(loader)
  }
}
