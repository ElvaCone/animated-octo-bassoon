import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            console.log('setBillList');
            state.billList = action.payload
        }
    }
})

const { setBillList } = billStore.actions
const reducer = billStore.reducer


const fetchBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:5834/ka')
        dispatch(setBillList(res.data))
        console.log(res.data);
    }
}

export { fetchBillList }
export default reducer