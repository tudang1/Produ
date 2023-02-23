import { createSlice } from '@reduxjs/toolkit';
import { orderAdminService } from '../services/orderAdminService';

const initialState = {
    ordersAdmin: []
}

const orderAdminSlice = createSlice({
    name: "orderAdmin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(orderAdminService.endpoints.getOrders.matchFulfilled, (state, action) => {
            state.ordersAdmin = action.payload;
        })
        builder.addMatcher(orderAdminService.endpoints.getOrderById.matchFulfilled, (state,action) => {
            state.ordersAdmin = action.payload;
        })
        builder.addMatcher(orderAdminService.endpoints.confirmOrder.matchFulfilled, (state, action) => {
            let index = state.orders.findIndex(orderAdmin => orderAdmin.id === action.payload.id);
            state.ordersAdmin[index] = action.payload
        })
        builder.addMatcher(orderAdminService.endpoints.deleteOrder.matchFulfilled, (state, action) => {
            let index = state.orders.findIndex(orderAdmin => orderAdmin.id === action.payload);
            state.ordersAdmin.splice(index, 1);
        })
    }
});

export const { } = orderAdminSlice.actions

export default orderAdminSlice.reducer