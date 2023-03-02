import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../app/slices/authSlice";
import queryString from "query-string";
import productsApi from "../../app/api/productsApi";

function Header() {
  const { auth } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const [products,setProducts] = useState([]);

  //search product
  // Khởi tạo state ban đầu dựa trên url hiện tại
  const [filter, setFilter] = useState(() => {
    const params = queryString.parse(location.search);
    return {
      search: params.search || "",
    };
  });

  // Khi url thay đổi => parse lại url => lưu vào state
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilter({
      search: params.search || "",
    });
  }, [location.search]);

  //lọc theo search
  const handleSearch = () => {
    const params = { ...filter, search: term};
    navigate({
      pathname: location.pathname, // http://localhost:3000
      search: queryString.stringify(params, {
        // category=sylas&name=abc
        skipEmptyString: true,
      }),
    });
  };

  const handleLogin = () => {
    if (auth === null) {
      navigate("/login");
    } else {
      alert("Bạn Đã Đăng Nhập");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleHistoryOrder = () => {
    if (auth === null) {
      navigate("/login");
    } else {
      navigate("user/history-order");
    }
  };
  return (
    <div id="header">
      <div className="container ">
        <div className="header-bar ">
          <div className="row ">
            <div className="col-sm-4 d-flex align-items-center">
              <div className="seach-form d-flex align-items-center rounded shadow-sm pe-3">
                {/* <!-- Ô tìm kiếm sản phẩm --> */}
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  className="form-control border-0 seach-form-input"
                  value={term}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  onChange={(e) => setTerm(e.target.value)}
                />
                {/* <!-- Nút tìm kiếm sản phẩm --> */}
                <span className="text-black-50 seach-form-button ps-2">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <a href="/">
                <div className="logo ">4U</div>
              </a>
            </div>
            <div className="col-sm-4 ">
              <div className="navbar-icon align-items-center justify-content-end">
                <p className="hello mb-0 hide">
                  Xin chào, <span className="username">{auth?.name}</span>
                </p>
                <div className="icon fs-4 mx-1">
                  <Link to={"/user/cart"}>
                    <div className="bag">
                      <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                  </Link>
                </div>
                <div>
                  <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src={
                            auth?.avatar
                              ? auth?.avatar
                              : "https://via.placeholder.com/150"
                          }
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          alt={auth?.name}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={handleLogin}>
                          Đăng Nhập
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Đăng xuất
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={handleHistoryOrder}
                        >
                          Lịch Sử Mua Hàng
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
