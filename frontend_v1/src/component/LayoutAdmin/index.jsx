import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import SidebarAdmin from "../SidebarAdmin";


function LayoutAdmin() {
    return (
        <div className="d-flex" id="wrapper">
            <SidebarAdmin />

            <div id="page-content-wrapper">
                <Navigation />

                <div className="container-fluid mt-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LayoutAdmin;
