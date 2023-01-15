import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../pages/anonymos/HomePage";
import Header from "../Header";
import Sidebar from "../Sidebar";

function LayoutAnonymous() {
    return (
        <>
            <Header />

            <Sidebar/>

            <Home/>

            <Outlet />
        </>
    );
}

export default LayoutAnonymous;
