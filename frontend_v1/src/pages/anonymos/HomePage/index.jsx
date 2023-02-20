import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import productsApi from "../../../app/api/productsApi";
import queryString from "query-string";
import categoryApi from "../../../app/api/categoryApi";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Khởi tạo state ban đầu dựa trên url hiện tại
  const [filter, setFilter] = useState(() => {
    const params = queryString.parse(location.search);
    return {
      category: params.category || "",
    };
  });

  // Khi url thay đổi => parse lại url => lưu vào state
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilter({
      category: params.category || "",
    });
  }, [location.search]);

  // Lấy danh sách bài viết
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = queryString.stringify(filter, {
          skipEmptyString: true,
        }); // category=sylas&name=abc
        const res = await productsApi.getProducts(query);
  
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [filter]);

  // Lấy danh sách category
  // useEffect(() => {
  //   const fetchCategoies = async () => {
  //     try {
  //       let res = await categoryApi.getCategories();
  //       // console.log(res);
  //       setCategories(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCategoies();
  // }, []);

  // Lọc theo category
  // const filterByCategory = (name) => {
  //   const params = { ...filter, category: name };

  //   navigate({
  //     pathname: location.pathname, // http://localhost:3000
  //     search: queryString.stringify(params, {
  //       // category=sylas&name=abc
  //       skipEmptyString: true,
  //     }),
  //   });
  // };

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <h6 className="multiline-text d-flex justify-content-center text-dark mb-3 ">
          NEW ARRIVALS
        </h6>
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
          <Link to={`/products/1`}>
          <button className="btn btn-outline-secondary ">Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
