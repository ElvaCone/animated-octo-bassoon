import { createBrowserRouter } from 'react-router-dom'
import Article from '../page/Article'
import Login from '../page/Login'
import Home from '../page/Home'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFound from '../page/NotFound'

const router = createBrowserRouter([
    {
        path: '/article',
        element: <Article />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home/:id/:name',
        element: <Home />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/board',
                element: <Board />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router
