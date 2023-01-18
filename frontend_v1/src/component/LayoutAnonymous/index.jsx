import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function LayoutAnonymous() {
    return (
        <>
            <Header />

            <Sidebar/>

            <Outlet />

            <Footer/>
        </>
    );
}

export default LayoutAnonymous;
