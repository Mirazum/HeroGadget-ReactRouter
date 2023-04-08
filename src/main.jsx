import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Shop from './components/Shop'
import About from './components/About'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage/>,
        children:[
            {
               path:'/' , element:<Home></Home>
            },
            {
               path:'/shop' , element:<Shop></Shop>, loader:()=>fetch('products.json'),
            },
            {
               path:'/cart' , element:<Cart></Cart>
            },
            {
               path:'/about' , element:<About></About>
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />)
