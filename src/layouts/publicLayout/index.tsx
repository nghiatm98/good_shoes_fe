import clsx from 'clsx'
import { Footer, Header } from 'layouts'
import { Fragment } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const PublicLayout = () => {
  const { pathname } = useLocation()
  return (
    <Fragment>
      <Header />
      <div
        className={clsx('min-h-screen', {
          'mt-[120px]': pathname !== '/'
        })}
      >
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  )
}
