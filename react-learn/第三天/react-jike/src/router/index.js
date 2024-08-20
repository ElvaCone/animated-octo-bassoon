import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import LoginForm from '@/components/表单--基础'
import AuthRoute from '@/components/AuthRoute'

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
])

export default router

