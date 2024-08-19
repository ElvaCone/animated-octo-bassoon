const TOKENKEY = 'token_key'

const setToken = (token) => {
    localStorage.setItem(TOKENKEY, token)
}

const getToken = (token) => {
    return localStorage.getItem(TOKENKEY)
}

const removeToken = (token) => {
    localStorage.removeItem(TOKENKEY)
}

export {
    setToken,
    getToken,
    removeToken
}

