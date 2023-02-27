import { createSlice } from '@reduxjs/toolkit';
import { orderUserService } from '../services/orderUserService';

const initialState = {
    ordersUser: []
}
const orderUserSlice = createSlice({
    name: "orderUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {    
        builder.addMatcher(orderUserService.endpoints.getOrderByUserid.matchFulfilled, (state, action) => {
            state.ordersUser = action.payload;
        })
        builder.addMatcher(orderUserService.endpoints.createOrder.matchFulfilled, (state, action) => {
            state.ordersUser.push(action.payload);
            // state.ordersUser.splice(0, 0, action.payload);
        })
    }
});

export const { } = orderUserSlice.actions

export default orderUserSlice.reducer