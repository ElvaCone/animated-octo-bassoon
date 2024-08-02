import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Article = () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const id = params.get('id')
    const name = params.get('name')
    return (
        <div>
            This is Article
            {/* 声明式，会被解析成a标签 */}
            <Link to='/login'>跳转到Login</Link>
            {/* 命令式 */}
            <button onClick={() => navigate('/login')}>跳转到Login</button>
            <button onClick={() => navigate('/login?id=1001&name=Tom')}>searchParams传参</button>
            searchParams传参，id：{id}，name：{name}。
            <br />
            <button onClick={() => navigate('/home/1001/Tom')}>params传参</button>
        </div>
    )
}

export default Article
