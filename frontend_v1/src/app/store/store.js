import { configureStore } from "@reduxjs/toolkit";
import { authService } from "../services/authService";
import baseApi from "../services/baseService";
import authReducer from "../slices/authSlice";
import productReducer from "../slices/productSlice";
import categoryReducer from "../slices/categorySlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
        products: productReducer,
        categories: categoryReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authService.middleware,
            baseApi.middleware,
        ),
});

export default store;
