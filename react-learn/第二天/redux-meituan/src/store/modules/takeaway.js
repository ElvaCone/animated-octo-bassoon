import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        foodsList: [],
        activeIndex: 0,
        cartList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        setActiveIndex(state, action) {
            state.activeIndex = action.payload
        },
        addCartList(state, action) {
            const item = state.cartList.find((item) => item.id === action.payload.id)
            // console.log('item:', item);
            if (item) {
                item.count++
                // console.log('count:', item.count);
            } else {
                action.payload.count = 1
                state.cartList.push(action.payload)
                // console.log('count:', action.payload.count);
            }
        },
        increCartList(state, action) {
            const item = state.cartList.find((item) => item.id === action.payload.id)
            item.count++
        },
        decreCartList(state, action) {
            const item = state.cartList.find((item) => item.id === action.payload.id)
            if (item.count > 0) {
                item.count--
            }
        },
        clearCartList(state, action) {
            state.cartList = []
        }
    }
})

const { setFoodsList, setActiveIndex, addCartList, increCartList, decreCartList, clearCartList } = foodsStore.actions
const reducer = foodsStore.reducer

const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodsList, setActiveIndex, addCartList, increCartList, decreCartList, clearCartList }
export default reducer
