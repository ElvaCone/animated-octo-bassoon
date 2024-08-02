import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const id = params.get('id')
    const name = params.get('name')
    return (
        <div>
            This is Login.
            {/* 声明式，会被解析成a标签 */}
            <Link to='/article'>跳转到Article</Link>
            {/* 命令式 */}
            <button onClick={() => navigate('/article')}>跳转到Article</button>
            <button onClick={() => navigate('/article?id=1001&name=Tom')}>searchParams传参</button>
            searchParams传参，id：{id}，name：{name}。
        </div>
    )
}

export default Login
