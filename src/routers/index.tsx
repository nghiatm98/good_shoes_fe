import { privateRouter, rootError, rootRouter } from 'common'
import { prefixRootRoute } from 'configs'
import { PrivateLayout } from 'layouts'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const PublicLayout = lazy(() => import('layouts/publicLayout').then((module) => ({ default: module.PublicLayout })))

export const RouterRoot = () => {
  return (
    <Routes>
      <Route path={prefixRootRoute.public} element={<PublicLayout />}>
        {rootRouter.map((item) => {
          return (
            <Route
              key={item.name}
              path={item.path}
              element={
                <Suspense>
                  <item.element />
                </Suspense>
              }
            >
              {item.subNavs &&
                !item.isHiddenRouter &&
                item.subNavs.map((itemchild) => {
                  return <Route key={itemchild.name} path={itemchild.path} element={<itemchild.element />} />
                })}
            </Route>
          )
        })}
      </Route>
      <Route path={prefixRootRoute.manager} element={<PrivateLayout />}>
        {privateRouter.map((item) => {
          return (
            <Route
              key={item.name}
              path={item.path}
              element={
                <Suspense>
                  <item.element />
                </Suspense>
              }
            >
              {item.subNavs &&
                !item.isHiddenRouter &&
                item.subNavs.map((itemchild) => {
                  return <Route key={itemchild.name} path={itemchild.path} element={<itemchild.element />} />
                })}
            </Route>
          )
        })}
      </Route>
      {rootError.map((item) => {
        return <Route key={item.name} path={item.path} element={<item.element />} />
      })}
    </Routes>
  )
}
