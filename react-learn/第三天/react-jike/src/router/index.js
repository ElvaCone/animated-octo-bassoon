import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import LoginForm from '@/components/表单--基础'
import AuthRoute from '@/components/AuthRoute'
import ConfirmModalComponent from '@/components/ConfirmModalComponent'
import BarChart from '@/components/BarChart'
import PromiseTest from '@/components/PromiseTest'
import QuillEditor from '@/components/QuillEditor'
import ArticalForm from '@/components/ArticalForm'
import CustomPagination from '@/components/CustomPagination'
import Home from '@/pages/Hoome'
import { lazy, Suspense } from 'react'
// import Profile from '@/pages/Profile'
// import Settings from '@/pages/Settings'
const Profile = lazy(() => import('@/pages/Profile')) // lazy懒加载
const Settings = lazy(() => import('@/pages/Settings'))

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
        path: '/PromiseTest',
        element: <PromiseTest />
    },
    {
        path: '/QuillEditor',
        element: <QuillEditor />
    },
    {
        path: '/ArticalForm',
        element: <ArticalForm />
    },
    {
        path: '/CustomPagination',
        element: <CustomPagination />
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
                element: <Suspense fallback={<div>Profile is loading...</div>}> <Profile /> </Suspense>, // Suspense异步加载
            },
            {
                path: 'settings',
                element: <Suspense fallback={<div>Settings is loading...</div>}> <Settings /> </Suspense>,
            },
        ],
    },
])

export default router

