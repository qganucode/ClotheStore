import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import { Protector } from "../helper"
import Home from "../pages/home/Home"
import Products from "../pages/products/Products"
import Product from "../pages/product/Product"
import Login from "../pages/login/Login"
import Registration from "../pages/registration/Registration"
import Logout from "../pages/logout/Logout"
import Profile from "../pages/profile/Profile"

const router = createBrowserRouter([{
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/logout',
                element: <Logout />
            },
            {
                path: '/products/:id',
                element: <Products />
            },
            {
                path: '/product/:id',
                element: <Product />
            },
            {
                path: '/profile',
                element: <Protector Component={Profile} />
            },
            {
                path: '*',
                element: <Protector Component={Home} />
            }
        ]
    }]
)

export default router