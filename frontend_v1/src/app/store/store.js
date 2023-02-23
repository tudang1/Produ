import { configureStore } from "@reduxjs/toolkit";
import { authService } from "../services/authService";
import baseApi from "../services/baseService";
import baseUserApi from "../services/baseUserService";
import authReducer from "../slices/authSlice";
import productReducer from "../slices/productSlice";
import categoryReducer from "../slices/categorySlice";
import userReducer from "../slices/userSlice";
import imageReducer from "../slices/imageSlice";
import orderItemReducer from "../slices/orderItemSlice";
import orderUserReducer from "../slices/orderUserSlice";
import orderAdminReducer from "../slices/orderAdminSlice";

const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [baseUserApi.reducerPath] : baseUserApi.reducer,
        auth: authReducer,
        products: productReducer,
        categories: categoryReducer,
        users: userReducer,
        images: imageReducer,
        orderItems: orderItemReducer,
        ordersUser: orderUserReducer,
        ordersAdmin: orderAdminReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authService.middleware,
            baseApi.middleware,
            baseUserApi.middleware,
        ),
});

export default store;
