import { createSlice } from '@reduxjs/toolkit';
import { orderItemService } from '../services/orderItemService';

const initialState = {
    orderItems: []
}

const orderItemSlice = createSlice({
    name: "orderItem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(orderItemService.endpoints.getOrderItems.matchFulfilled, (state, action) => {
            state.orderItems = action.payload;
        })
        builder.addMatcher(orderItemService.endpoints.createOrderItem.matchFulfilled, (state, action) => {
            
            state.orderItems.push(action.payload);
        })
        builder.addMatcher(orderItemService.endpoints.updateOrderItem.matchFulfilled, (state, action) => {
            let index = state.orderItems.findIndex(orderItem => orderItem.id === action.payload.id);
            state.orderItems[index] = action.payload;
        })
        builder.addMatcher(orderItemService.endpoints.deleteOrderItem.matchFulfilled, (state, action) => { 
            let index = state.orderItems.findIndex(orderItem => orderItem.id === action.payload);
            state.orderItems.splice(index, 1);
        })
    }
});

export const { } = orderItemSlice.actions

export default orderItemSlice.reducer