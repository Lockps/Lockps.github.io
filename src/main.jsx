import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Market from './Page/Market.jsx'
import Detail from './Page/Detail.jsx'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/MarketPlace",
    element: <Market/>
  },
  {
    path:"/product",
    element:<Detail/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
