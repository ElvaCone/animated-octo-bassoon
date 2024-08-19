import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import LoginForm from '@/components/表单--基础'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/LoginForm',
        element: <LoginForm />
    },
])

export default router

