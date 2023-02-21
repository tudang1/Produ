import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsApi from "../../../app/api/productsApi";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);

  //lấy product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productsApi.getProductById(productId);
        setProduct(res.data);
        setCategory(res.data.category.name);
        setImage(res.data.thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, []);
  //   console.log(product.thumbnail);
  return (
    <div className="course-container mt-6">
      <div className="mt-1 mx-5 ">
        <nav
          style={{ "--bs-breadcrumb-divider": "'/'" }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={`/products?category=${category}`}>{category}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="cover col-md-5 mb-4">
            <p className="product-image "></p>
            <img src={image} alt={product.title} width={500} height={500} />
          </div>

          <div className="col-md-7 pl-5">
            <div className="product-detail">
              <h5 className="pt-4">
                <p href="#">{product.title}</p>
              </h5>
              <div className="star">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>

              <span className="price colored">$ {product.price}</span>

              <p>{product.description}</p>

              <label className="screen-reader-text" htmlFor="qty">
                Quantity
              </label>
              <input
                type="number"
                id="typeNumber"
                className="form-control"
                min="1"
                
              ></input>
              <p></p>
              <button type="button" className="btn btn-primary btn-block btn-lg">
                Add To Cart
              </button>
              <button
                type="button"
                className="btn btn-warning btn-block btn-lg mx-2"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
