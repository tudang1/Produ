import { createSlice } from '@reduxjs/toolkit'
import { productService } from '../services/productService';

const initialState = {
    products : []
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(productService.endpoints.getProducts.matchFulfilled, (state, action) => {
        state.products = action.payload;
    })
    builder.addMatcher(productService.endpoints.deleteProduct.matchFulfilled, (state, action) => {
        let index = state.products.findIndex(product => product.id === action.payload);
        state.products.splice(index, 1);
    })
    builder.addMatcher(productService.endpoints.createProduct.matchFulfilled, (state, action) => {
        state.products.push(action.payload);
    })
    builder.addMatcher(productService.endpoints.updateProduct.matchFulfilled, (state,action) =>{
        let index = state.products.findIndex(product => product.id === action.payload.id);
        state.products[index] = action.payload;
    })
}
});

export const {} = productSlice.actions

export default productSlice.reducer