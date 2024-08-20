import { axiosService, setToken as _setToken, getToken, removeToken } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"
import { loginApi, getProfileApi } from "@/apis/user"

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

const fetchLogin = (loginFormDate) => {
    return async (dispatch) => {
        const res = await loginApi(loginFormDate)
        dispatch(setToken(res.data.token))
    }
}

export { fetchLogin }

export default userReducer

