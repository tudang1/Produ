import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id="header">
    <div className="container">
      <div className="header-bar">
        <div className="row">
          <div className="col-sm-4 d-flex align-items-center">
            <div className="seach-form d-flex align-items-center rounded shadow-sm pe-3">
              {/* <!-- Ô tìm kiếm sản phẩm --> */}
              <input type="text" placeholder="Tìm kiếm sản phẩm" className="form-control border-0 seach-form-input"/>
              {/* <!-- Nút tìm kiếm sản phẩm --> */}
              <span className="text-black-50 seach-form-button ps-2"><i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-center justify-content-center">
            <a href="./index.html">
              <div className="logo ">4U</div>
            </a>
          </div>
          <div className="col-sm-4">
            <div className="navbar-icon align-items-center justify-content-end">
              <p className="hello mb-0 hide">Xin chào, <span className="username">Khách</span></p>
              <div className="icon fs-4">
                <Link to={"/admin/login"}>
                  <span className="icon-user"><i className="fa-solid fa-user"></i></span>
                </Link>

                <a href="./favorite.html"><span className="like-icon-header"><i className="fa-solid fa-heart"></i></span></a>
                <button className="btn px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight">
                  <div className="bag"><i className="fa-solid fa-bag-shopping"></i>
                    <span className="amount">0</span>
                  </div>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Header