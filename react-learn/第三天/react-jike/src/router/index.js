import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import LoginForm from '@/components/表单--基础'
import AuthRoute from '@/components/AuthRoute'
import ConfirmModalComponent from '@/components/ConfirmModalComponent'
import BarChart from '@/components/BarChart'
import Home from '@/pages/Hoome'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute> <Layout /> </AuthRoute>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/LoginForm',
        element: <LoginForm />
    },
    {
        path: '/ConfirmModalComponent',
        element: <ConfirmModalComponent />
    },
    {
        path: '/BarChart',
        element: <BarChart />
    },
    {
        path: '/home',
        element: <Home />,
        children: [ // 子路由
            {
                index: true,  // 使用 index 属性指定默认子路由
                element: <Navigate to="profile" replace />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
    },
])

export default router

