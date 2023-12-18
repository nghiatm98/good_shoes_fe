import { useRefreshWeb } from 'hooks'
import { Suspense } from 'react'
import { RouterRoot } from 'routers'
import { LoadingComponent } from 'components'
import { CartProvider, ModalProvider, ProductProvider } from 'contexts'
import { ToastContainer } from 'react-toastify'
import { ErrorBoundary } from 'layouts'

function App() {
  useRefreshWeb()

  return (
    <Suspense fallback={<LoadingComponent />}>
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
      <ErrorBoundary>
        <ModalProvider>
          <ProductProvider>
            <CartProvider>
              <RouterRoot />
            </CartProvider>
          </ProductProvider>
        </ModalProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

export default App
