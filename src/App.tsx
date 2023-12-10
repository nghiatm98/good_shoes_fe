import { useRefreshWeb } from 'hooks'
import { Suspense } from 'react'
import { RouterRoot } from 'routers'
import { LoadingData } from 'components'
import { ModalProvider, ProductProvider } from 'contexts'
import { ToastContainer } from 'react-toastify'

function App() {
  useRefreshWeb()

  return (
    <Suspense fallback={<LoadingData />}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ModalProvider>
        <ProductProvider>
          <RouterRoot />
        </ProductProvider>
      </ModalProvider>
    </Suspense>
  )
}

export default App
