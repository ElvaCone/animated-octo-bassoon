import { createBrowserRouter } from 'react-router-dom'
import { lazy } from "react"
import App from '../App'

const Home = lazy(() => import('@/pages/Home'))
const Test = lazy(() => import('@/components/Test'))
const TestUseState = lazy(() => import('@/components/TestUseState'))
const TestChildren = lazy(() => import('@/components/TestChildren'))
const TestUseRef = lazy(() => import('@/components/TestUseRef'))
const TestSpinner = lazy(() => import('@/components/TestSpinner'))
const TestWaypoint = lazy(() => import('@/components/TestWaypoint'))
const TestInfiniteLoader = lazy(() => import('@/components/TestInfiniteLoader'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/Test',
        element: <Test />
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
    {
        path: '/Home',
        element: <Home />
    },
    {
        path: '/TestSpinner',
        element: <TestSpinner />
    },
    {
        path: '/TestWaypoint',
        element: <TestWaypoint />
    },
    {
        path: '/TestInfiniteLoader',
        element: <TestInfiniteLoader />
    },
])

export default router

