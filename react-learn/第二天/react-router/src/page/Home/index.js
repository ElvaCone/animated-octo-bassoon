import { Link, useNavigate, useParams } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const name = params.name
    return (
        <div>
            This is Home
            {/* 声明式，会被解析成a标签 */}
            <Link to='/login'>跳转到Login</Link>
            {/* 命令式 */}
            <button onClick={() => navigate('/login')}>跳转到Login</button>
            params传参，id：{id}，name：{name}。
        </div>
    )
}

export default Home
