import { axiosService, _setToken, getToken, removeToken } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        }
    }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (LoginForm) => {
    return async (dispatch) => {
        const res = await axiosService.post('/authorizations', LoginForm)
        dispatch(setToken(res.data.token))
    }
}

export { fetchLogin, setToken }

export default userReducer
