import React from "react";
import { Outlet } from "react-router-dom";
import BestSeller from "../BestSeller";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function LayoutAnonymous() {
    return (
        <>
            <Header />

            <Sidebar/>

            <Outlet />
            <hr/>
            <BestSeller/>

            <Footer/>
        </>
    );
}

export default LayoutAnonymous;
