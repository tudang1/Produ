import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import productsApi from "../../../app/api/productsApi";
import { useCreateOrderItemMutation } from "../../../app/services/orderItemService";

function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [createOrderItem] = useCreateOrderItemMutation();
  const [amount, setAmount] = useState(1);
  const { auth } = useSelector((state) => state.auth);
  const { orderItems } = useSelector((state) => state.orderItems);

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
  }, [productId]);

  let u = false;
  const handleAddOrderItem = () => {
    orderItems.map((item) => {
      if (item.product.id == productId) {
        u = true;
        return;
      }
    });

    if (u) {
      alert("Sản Phẩm Đã Được Thêm Trước...");
      setTimeout(() => {
        navigate("/user/cart");
      }, 1000);
    } else {
      let newOrderItem = {
        product: product,
        amount: amount,
        account: auth,
      };
      createOrderItem(newOrderItem)
        .unwrap()
        .then(() => {
          alert("Add success...");
          setTimeout(() => {
            navigate(-1);
          }, 1000);
        })
        .catch((err) => alert(err.data.message));
    }
  };

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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
              <p></p>
              <button
                type="button"
                className="btn btn-primary btn-block btn-lg"
                onClick={handleAddOrderItem}
              >
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
