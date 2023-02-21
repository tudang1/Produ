import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import productsApi from '../../app/api/productsApi';

function BestSeller() {
    const [product1, setProduct1] = useState([]);
    const [image1, setImage1] = useState([]);

    const [product2, setProduct2] = useState([]);
    const [image2, setImage2] = useState([]);

    const [product3, setProduct3] = useState([]);
    const [image3, setImage3] = useState([]);

    const [product6, setProduct6] = useState([]);
    const [image6, setImage6] = useState([]);

    //lấy product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res1 = await productsApi.getProductById(1);
        setProduct1(res1.data);
        setImage1(res1.data.thumbnail);

        const res2 = await productsApi.getProductById(2);
        setProduct2(res2.data);
        setImage2(res2.data.thumbnail);

        const res3 = await productsApi.getProductById(3);
        setProduct3(res3.data);
        setImage3(res3.data.thumbnail);

        const res6 = await productsApi.getProductById(6);
        setProduct6(res6.data);
        setImage6(res6.data.thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="course-container mt-3">
    <h5 className='text-dark d-flex justify-content-center mb-3'>Best Seller</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="course-list row justify-content-center">
                <div  className="col-md-2 mx-2">
                    <Link to={`/products/${product1.id}`}>
                      <div className="course-item shadow-sm rounded mb-4 ">
                        <div className="course-item-image text-center">
                          <img src={image1} alt={product1.title} width={200} height={200}/>
                        </div>
                      </div>
                    </Link>
                </div>

                <div  className="col-md-2 mx-2">
                    <Link to={`/products/${product2.id}`}>
                      <div className="course-item shadow-sm rounded mb-4 ">
                        <div className="course-item-image text-center">
                          <img src={image2} alt={product2.title} width={200} height={200}/>
                        </div>
                      </div>
                    </Link>
                </div>

                <div  className="col-md-2 mx-2">
                    <Link to={`/products/${product3.id}`}>
                      <div className="course-item shadow-sm rounded mb-4 ">
                        <div className="course-item-image text-center">
                          <img src={image3} alt={product3.title} width={200} height={200}/>
                        </div>
                      </div>
                    </Link>
                </div>

                <div  className="col-md-2 mx-2">
                    <Link to={`/products/${product6.id}`}>
                      <div className="course-item shadow-sm rounded mb-4 ">
                        <div className="course-item-image text-center">
                          <img src={image6} alt={product6.title} width={200} height={200}/>
                        </div>
                      </div>
                    </Link>
                </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      {/* <!-- Sidebar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item mx-2">
                <p >Gift sets</p>
              </li>
              <li className="nav-item mx-2">
                <p >Makeup new arrivals</p>
              </li>
              <li className="nav-item mx-2">
                <p >Makeup Bestsellers</p>
              </li>
              <li className="nav-item mx-2">
                <p >Skincare Bestsellers</p>
              </li>
              <li className="nav-item mx-2">
                <p >Free Shipping</p>
              </li>
             
            </ul>
          </div>
          
        </div>
      </nav>
      <hr />
    </div>
    </div>
  )
}

export default BestSeller