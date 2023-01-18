import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import productsApi from '../../../app/api/productsApi';

function ProductDetail() {
  const {productId} = useParams();
  const [product,setProduct] = useState([]);
  const [category,setCategory] = useState([]);

  //lấy product
  useEffect(()=>{
    const fetchProduct = async()=>{
      try {
        const res = await productsApi.getProductById(productId);
        setProduct(res.data);
        setCategory(res.data.category.name);
        console.log(res.data.category.name);
      }catch(e){
        console.log(e);
      }
    };
    fetchProduct();
  },[]);
 
  return (
    <div className="course-container mt-5">
    <div className="container">
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
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {product.title}
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="main p-4 shadow-sm">
                    <h2 className="course-title fs-5">
                        {product.title}
                    </h2>

                    <hr />

                    <div className="course-description">
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductDetail