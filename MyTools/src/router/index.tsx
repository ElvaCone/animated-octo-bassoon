import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import lazyPages from '@/pages'
const { Test, 将字幕文件中的所有时间点增加或减少n秒, AAA } = lazyPages

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
    {
        path: '/AAA',
        element: <AAA />
    },
])

export default router

