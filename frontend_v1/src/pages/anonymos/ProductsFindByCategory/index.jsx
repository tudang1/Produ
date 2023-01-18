import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import productsApi from '../../../app/api/productsApi';

function ProductsFindByCategory() {
  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [category,setCategory] = useState([]);

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
    // set category từ param
    setCategory(params.category);
    
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

  return (
    <div className="course-container mt-5">
      <h4 className='text-dark d-flex justify-content-center mb-3'>{category}</h4>
      <h6 className='text-dark d-flex justify-content-center mb-3'>OUR SELECTION</h6>
        <div className="container">
          <div className="row">
            <div className="col-md-16">
              <div className="course-list row">
                {products.length > 0 && 
                  products.map((product) => (
                    <div key={product.id} className="col-md-4">
                      <Link to={`/products/${product.id}`}>
                        <div className="course-item shadow-sm rounded mb-4">
                          <div className="course-item-image text-center">
                            <img src={product.image.imageUrl} alt={product.title} width={400} height={400}/>
                          </div>
                          <div className="course-item-info p-1">
                            <h2 className="fs-5 mb-2 text-dark d-flex justify-content-center">
                              {product.title}
                            </h2>
                            <p className="text-black-50 d-flex justify-content-center">
                              $ {product.price}
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
      </div>
  )
}

export default ProductsFindByCategory