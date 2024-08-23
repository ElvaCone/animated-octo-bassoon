import { createBrowserRouter } from 'react-router-dom'
import { lazy } from "react"
import App from '../App'

const TestUseState = lazy(() => import('@/components/TestUseState'))
const TestChildren = lazy(() => import('@/components/TestChildren'))
const TestUseRef = lazy(() => import('@/components/TestUseRef'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/TestUseState',
        element: <TestUseState />
    },
    {
        path: '/TestChildren',
        element: <TestChildren />
    },
    {
        path: '/TestUseRef',
        element: <TestUseRef />
    },
])

export default router

