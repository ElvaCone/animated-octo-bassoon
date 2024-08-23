import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import TestChildren from '../components/TestChildren'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/TestChildren',
        element: <TestChildren />
    },
])

export default router

