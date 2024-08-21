import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import TestUseReducer01 from '../components/TestUseReducer01'
import TestUseReducer02 from '../components/TestUseReducer02'
import TestUseReducer03 from '../components/TestUseReducer03'
import TestUseReducer04 from '../components/TestUseReducer04'
import TestUseState from '../components/TestUseState'
import TestMemo from '../components/TestMemo'

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
    {
        path: '/TestUseReducer04',
        element: <TestUseReducer04 />
    },
    {
        path: '/TestUseState',
        element: <TestUseState />
    },
    {
        path: '/TestMemo',
        element: <TestMemo />
    },
])

export default router

