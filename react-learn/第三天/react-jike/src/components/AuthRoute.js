import PropTypes from 'prop-types'

const { getToken } = require("@/utils")
const { Navigate } = require("react-router-dom")


const AuthRoute = ({ children }) => {
    const token = getToken()
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace></Navigate> // 此时 replace={true}，React Router 会用新路由替换当前路由，而不是在历史记录中添加一条新记录
    }
}

AuthRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthRoute
