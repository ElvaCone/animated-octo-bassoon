import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import TestUseReducer01 from '../components/TestUseReducer01'
import TestUseReducer02 from '../components/TestUseReducer02'
import TestUseReducer03 from '../components/TestUseReducer03'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/TestUseReducer01',
        element: <TestUseReducer01 />
    },
    {
        path: '/TestUseReducer02',
        element: <TestUseReducer02 />
    },
    {
        path: '/TestUseReducer03',
        element: <TestUseReducer03 />
    },
])

export default router

