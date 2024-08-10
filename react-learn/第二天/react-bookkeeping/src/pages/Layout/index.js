import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBillList } from '@/store/modules/billStore'
import { Button } from 'react-bootstrap'
import BootstrapTabBar from '@/components/BootstrapTabBar';

const Layout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('useEffect');
        dispatch(fetchBillList())
    }, [dispatch])

    return (
        <div>
            我是Layout.
            <Button variant='primary' className='custom-btn'>按钮</Button>
            <Outlet />
            <BootstrapTabBar />
        </div>
    )
}

export default Layout
