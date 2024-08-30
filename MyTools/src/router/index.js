import { createBrowserRouter } from 'react-router-dom'
import Test from '../pages/Test'
import App from '../App'
import 将字幕文件中的所有时间点增加或减少n秒 from '../pages/将字幕文件中的所有时间点增加或减少n秒'

const router = createBrowserRouter([
    {
        path: '/Test',
        element: <Test />
    },
    {
        path: '/',
        element: <App />
    },
    {
        path: '/将字幕文件中的所有时间点增加或减少n秒',
        element: <将字幕文件中的所有时间点增加或减少n秒 />
    },
])

export default router

