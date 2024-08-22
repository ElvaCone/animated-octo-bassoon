import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import TestUseReducer01 from '../components/TestUseReducer01'
import TestUseReducer02 from '../components/TestUseReducer02'
import TestUseReducer03 from '../components/TestUseReducer03'
import TestUseReducer04 from '../components/TestUseReducer04'
import TestUseMemo from '../components/TestUseMemo'
import TestMemo01 from '../components/TestMemo01'
import TestMemo02 from '../components/TestMemo02'
import TestUseCallback from '../components/TestUseCallback'
import TestForwardRef from '../components/TestForwardRef'
import TestUseImperativeHandle from '../components/TestUseImperativeHandle'
import TestZustand from '../components/TestZustand'

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
        path: '/TestUseMemo',
        element: <TestUseMemo />
    },
    {
        path: '/TestMemo01',
        element: <TestMemo01 />
    },
    {
        path: '/TestMemo02',
        element: <TestMemo02 />
    },
    {
        path: '/TestUseCallback',
        element: <TestUseCallback />
    },
    {
        path: '/TestForwardRef',
        element: <TestForwardRef />
    },
    {
        path: '/TestUseImperativeHandle',
        element: <TestUseImperativeHandle />
    },
    {
        path: '/TestZustand',
        element: <TestZustand />
    },
])

export default router

