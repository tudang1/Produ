import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsApi from "../../../app/api/productsApi";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [image,setImage] = useState([]);

  //lấy product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productsApi.getProductById(productId);
        setProduct(res.data);
        setCategory(res.data.category.name);
        setImage(res.data.image.imageUrl);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, []);
//   console.log(product.image.imageUrl);
  return (
    <div className="course-container mt-5">
      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="mb-4">
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={`/products?category=${category}`}>
                      {category}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {product.title}
                  </li>
                </ol>
              </nav>
            </div>

            <div className="main p-4 shadow-sm">
              <h2 className="course-title fs-5">{product.title}</h2>

              <hr />

              <div className="course-description">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
		<div className="row">

			<div className="col-md-6">
				<p  className="product-image"></p>
                <img src={image} alt={product.title}/>
			</div>

			<div className="col-md-6 pl-5">
				<div className="product-detail">
					<h5 className="pt-4"><p href="#">{product.title}</p></h5>
                    <div class="star">
                      <span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span>
                    </div>
	
					<span className="price colored">$ {product.price}</span>

                    <p>{product.description}</p>

					<label className="screen-reader-text" htmlFor="qty">Quantity</label>
					<input type="number" id="qty" className="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputMode="numeric" width={100}/>
                    <p></p>
					<button type="submit" name="add-to-cart" className="button">Add to cart</button>

				</div>
			</div>

		</div>
	</div>
    </div>
  );
}

export default ProductDetail;
