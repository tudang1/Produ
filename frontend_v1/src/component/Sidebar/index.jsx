import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import categoryApi from "../../app/api/categoryApi";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoies = async () => {
      try {
        let res = await categoryApi.getCategories();
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoies();
  }, []);

  return (
    <div>
      {/* <!-- Sidebar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              {categories.map((category) => (
                <li className="nav-item" key={category.id}>
                  <Link
                    className="nav-link"
                    to={`/products?category=${category.name}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
