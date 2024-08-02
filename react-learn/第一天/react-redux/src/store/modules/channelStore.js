import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannelList(state, action) {
            state.channelList = action.payload
        }
    }
})

const { setChannelList } = channelStore.actions
const reducer = channelStore.reducer

const url = 'http://geek.itheima.net/v1_0/channels'

const fetchChannelList = () => {
    // 异步
    return async (dispatch) => { // 参数要写dispatch
        const res = await axios.get(url)
        setChannelList(res.data.data.channels)
        dispatch(setChannelList(res.data.data.channels)) // 要用dispatch调用
    }
}

export { fetchChannelList }
export default reducer
