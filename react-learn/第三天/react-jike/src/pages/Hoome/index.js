import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation() // 拿到客户端路由的路径
    console.log(location.pathname)
    return (
        <div>
            <h2>Home Page</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            <Outlet /> {/* 这里会渲染子路由 */}
        </div>
    );
};

export default Home;
