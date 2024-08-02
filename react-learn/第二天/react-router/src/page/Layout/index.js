import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            This is 一级路由Layout.
            <Link to='about'>跳转到二级路由About.</Link>
            <Link to='board'>跳转到二级路由Board.</Link>
            {/* 二级路由 */}
            <Outlet />
        </div>
    )
}

export default Layout
