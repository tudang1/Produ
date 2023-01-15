import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import productsApi from "../../../app/api/productsApi";
import queryString from "query-string";
import categoryApi from "../../../app/api/categoryApi";

function Home() {
//   const location = useLocation();
//   const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Khởi tạo state ban đầu dựa trên url hiện tại
//   const [filter, setFilter] = useState(() => {
//     const params = queryString.parse(location.search);
//     return {
//       category: params.category || "",
//     };
//   });

  // Khi url thay đổi => parse lại url => lưu vào state
//   useEffect(() => {
//     const params = queryString.parse(location.search);
//     setFilter({
//       category: params.category || "",
//     });
//   }, [location.search]);

  // Lấy danh sách bài viết
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const query = queryString.stringify(filter, {
//           skipEmptyString: true,
//         }); // category=sylas&name=abc
//         const res = await productsApi.getProducts(query);
//         setProducts(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, [location.search]);

  // Lấy danh sách category
  useEffect(() => {
    const fetchCategoies = async () => {
      try {
        let res = await categoryApi.getCategories();
        // console.log(res);
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoies();
  }, []);

  // Lọc theo category
//   const filterByCategory = (name) => {
//     const params = { ...filter, category: name };

//     navigate({
//       pathname: location.pathname, // http://localhost:3000
//       search: queryString.stringify(params, {
//         // category=sylas&name=abc
//         skipEmptyString: true,
//       }),
//     });
//   };

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <h7 className="multiline-text d-flex justify-content-center text-dark ">
          NEW ARRIVALS
        </h7>
        <div className="carousel-inner">
          <img
            src="https://www.dior.com/couture/var/dior/storage/images/25632090/15-eng-GB/01-sauvage-elixir-20212_1440_1200.jpg"
            alt="..."
          />
        </div>
        <span className="fs-5 mb-3 d-flex justify-content-center">
          Dior Sauvage
        </span>
        <div className="mb-4 d-flex justify-content-center text-dark">
          <button className="btn btn-outline-secondary ">Detail</button>
        </div>
      </div>

      {/* <div className="course-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                    <input
                      type="text"
                      placeholder="Tìm kiếm bài viết"
                      className="form-control border-0 seach-form-input"
                    />
                    <span className="text-black-50 seach-form-button">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>

                  <div className="mb-4">
                    {categories.length > 0 &&
                      categories.map((category) => (
                        <button
                          key={category.id}
                          className="btn btn btn-outline-success"
                          onClick={() => filterByCategory(category.name)}
                        >
                          {category.name}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
              <div className="course-list row">
                {products.length > 0 &&
                  products.map((product) => (
                    <div key={product.id} className="col-md-3">
                      <Link to={`/products/${product.id}`}>
                        <div className="course-item shadow-sm rounded mb-4">
                          <div className="course-item-image">
                            <img src={product.avatar} alt={product.title} />
                          </div>
                          <div className="course-item-info p-3">
                            <h2 className="fs-5 mb-3 text-dark">
                              {product.title}
                            </h2>
                            <p className="text-black-50">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
