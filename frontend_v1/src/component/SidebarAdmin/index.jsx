import React from "react";
import { Link } from "react-router-dom";

function SidebarAdmin() {
    return (
        <div className="border-end" id="sidebar-wrapper">
            <div
                className="sidebar-heading border-bottom d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "White" }}
            >
                <div className="logo">
                    <img
                        src="data:image/png;base64,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"
                        alt="logo"
                    />
                </div>
            </div>
            <div
                className="list-group list-group-flush "
                style={{
                    backgroundColor: "#363636",
                    height: "590px",
                    color: "#fff",
                }}
            >
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Quản lý Product
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="p-0">
                                    <li className="my-2">
                                        <Link to={"/admin/products"}>
                                            List Products
                                        </Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to={"/admin/products/create"}>
                                            Create New Product
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Quản lý Category
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="p-0">
                                    <li className="my-2">
                                        <Link to={"/admin/categories"}>
                                            Danh sách Category
                                        </Link>
                                    </li>
                                    {/* <li className="my-2">
                                        <Link to={"/admin/categories"}>
                                            Tạo Category
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Quản lý user
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="p-0">
                                    <li className="my-2">
                                        <Link to={"/admin/users"}>
                                            Danh sách user
                                        </Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to={"/admin/users/create"}>
                                            Tạo user
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Quản lý Đơn Hàng
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="p-0">
                                    <li className="my-2">
                                        <Link to={"/admin/users"}>
                                            Danh sách Đơn Hàng
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarAdmin;
