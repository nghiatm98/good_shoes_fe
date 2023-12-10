import clsx from 'clsx'
import { useLayoutEffect, useState, createContext, ReactNode, useEffect } from 'react'

interface ModalState {
  isShow: boolean
  setElementModal: (elm: JSX.Element) => void
  hideModal: () => void
}

export const ModalContext = createContext<ModalState>({
  isShow: false,
  setElementModal(_) {},
  hideModal() {}
})

interface IModalProviderProps {
  children: ReactNode
}

export function ModalProvider({ children }: IModalProviderProps) {
  const [isShow, setShowModal] = useState(false)
  const [element, setElement] = useState<JSX.Element>(<></>)
  const setElementModal = (elm: JSX.Element) => {
    setElement(elm)
    setShowModal(true)
  }

  const hideModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    window.addEventListener('popstate', function () {
      if (isShow) {
        hideModal()
      }
    })
    return () => {
      window.removeEventListener('popstate', () => {})
    }
  }, [isShow])

  useLayoutEffect(() => {
    if (isShow) {
      document.body.style.overflowY = 'hidden'
      document.body.style.paddingRight = '16px'
      return
    }
    document.body.style.overflowY = 'auto'
    document.body.style.paddingRight = '0'
  }, [isShow])

  return (
    <ModalContext.Provider
      value={{
        isShow,
        setElementModal,
        hideModal
      }}
    >
      <>
        {isShow ? (
          <div className={clsx('fixed z-30 inset-0 w-full h-screen overflow-x-hidden overflow-y-auto flex justify-center overscroll-y-auto')}>
            <div className="fixed inset-0 bg-_000_3 opacity-50 z-30" onClick={hideModal}></div>
            <div className="relative z-[31] mt-auto w-auto h-auto mb-auto scale-animation">{element}</div>
          </div>
        ) : (
          <></>
        )}
        {children}
      </>
    </ModalContext.Provider>
  )
}
