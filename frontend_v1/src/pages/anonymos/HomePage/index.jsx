import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import productsApi from "../../../app/api/productsApi";
import queryString from "query-string";

function Home() {
  const location = useLocation();

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
    <div className="course-container mt-3">
      <div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <h6 className="multiline-text d-flex justify-content-center text-dark mb-3 ">
            NEW ARRIVALS
          </h6>
          <div className="carousel-inner d-flex justify-content-center">
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

        <div className="container">
            <Link to={"/products?category=Makeup"}>
              <img
                src="https://www.dior.com/couture/var/dior/storage/images/36552743/12-eng-GB/pcd-cover-dior-addict3_1440_1200.jpg"
                alt="..."
              />
            </Link>
          <h5 className="text-dark mx-2 mt-2 ">Makeup</h5>
        </div>

        <div className="container">
          <div className="carousel-inner">
            <Link to={"/products?category=SkinCare"}>
              <img
                src="https://www.dior.com/couture/var/dior/storage/images/37984931/6-eng-GB/cover-soin-capture-totale4_1440_1200.jpg"
                alt="..."
              />
            </Link>
          </div>
          <h5 className="multiline-text d-flex  text-dark mx-2 mt-2 ">
            Skincare
          </h5>
        </div>

        <div
          className="container"
        >
          <div className="carousel-inner">
            <Link to={"/products?category=MEN%27S%20FRAGRANCE"}>
              <img
                src="https://www.dior.com/couture/var/dior/storage/images/horizon/beauty/mens-fragrance/new/p1-dior-homme-sport-20232/38966412-2-eng-GB/p2-dior-homme-sport-20232_1440_1200.jpg"
                alt="..."
              />
            </Link>
          </div>
          <h5 className="multiline-text d-flex  text-dark mx-2 mt-2 ">
            MEN'S FRAGRANCE
          </h5>
        </div>

        <div
          className="container"
        >
          <div className="carousel-inner">
            <Link to={"/products?category=WOMEN%27S%20FRAGRANCE"}>
              <img
                src="https://www.dior.com/couture/var/dior/storage/images/39005290/2-eng-GB/pcd-miss-dior13_1440_1200.jpg"
                alt="..."
              />
            </Link>
          </div>
          <h5 className="multiline-text d-flex  text-dark mx-2 mt-2 ">
            WOMEN'S FRAGRANCE
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
