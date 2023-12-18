import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { LoadingComponent } from 'components'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Suspense fallback={<LoadingComponent />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
