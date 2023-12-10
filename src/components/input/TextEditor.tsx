// import UploadService from "@/app/_services/upload";
// import MapImagePath from "@/app/_utils/mapImagePath";
import { Fragment, memo, useEffect, useRef, useState } from 'react'

interface IEditorProps {
  value: string
  onChange: (e: any) => void
}

const Editor = memo(({ value, onChange }: IEditorProps) => {
  const editorRef = useRef<any>({
    CKEditor: '',
    ClassicEditor: ''
  })
  const [editorLoaded, setEditorLoaded] = useState<Boolean>(false)
  const { CKEditor, ClassicEditor } = editorRef?.current
  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])
  return (
    <Fragment>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value ?? ''}
          onReady={(_: any) => {
            // MyCustomUploadAdapterPlugin(editor)
          }}
          onChange={(_: any, editor: any) => {
            const data = editor.getData()
            onChange?.(data)
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  )
})

// class MyUploadAdapter {
//   public loader
//   constructor(loader: any) {
//     this.loader = loader
//   }

//   upload() {
//     return this.loader.file.then(async (file: any) => {
//       const formData = new FormData()
//       formData.append('file', file)
//       const imagePath = await UploadService.post({ data: formData })
//       return new Promise((rj) => {
//         rj({
//           urls: {
//             default: imagePath ? MapImagePath(imagePath[0].fileName) : ''
//           }
//         })
//       })
//     })
//   }

//   abort() {}
// }

// function MyCustomUploadAdapterPlugin(editor: any) {
//   editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
//     // Configure the URL to the upload script in your back-end here!
//     return new MyUploadAdapter(loader)
//   }
// }

export default Editor
