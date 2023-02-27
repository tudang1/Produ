import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
function PrivateUserRoutes() {
     // auth = state.auth.auth
    // isAuthenticated = state.auth.isAuthenticated
    const {  auth,isAuthenticated } = useSelector((state) => state.auth);

    // Nếu chưa đăng nhập => quay về trang login
    if (!isAuthenticated) {
        const confirm = window.confirm("Xin Hãy Đăng Nhập Để Tiếp Tục");
        if(confirm){
            return <Navigate to={"/login"} />;
        }
    }

    return <Outlet />;
}

export default PrivateUserRoutes