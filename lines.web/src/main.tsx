import React from 'react'
import RouterProvider from 'react-router-dom'
import './index.css'
import Router from './components/navigation/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Router}>
    <React.StrictMode>
    </React.StrictMode>
  </RouterProvider>
)
