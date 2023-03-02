import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom';
import queryString from "query-string";
import productsApi from '../../../app/api/productsApi';

function ProductsFindByCategory() {
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [category,setCategory] = useState([]);

  // Khởi tạo state ban đầu dựa trên url hiện tại
  const [filter, setFilter] = useState(() => {
    const params = queryString.parse(location.search);
    return {
      search: params.search || "",
      category: params.category || ""
    };
  });

  // Khi url thay đổi => parse lại url => lưu vào state
  useEffect(() => {
    const params = queryString.parse(location.search);
    // set category từ param
    setCategory(params.category);
    
    setFilter({
      search: params.search || "",
      category: params.category || ""
    });
    
  }, [location.search]);

  // Lấy danh sách bài viết theo category
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
    <div className="course-container mt-3">
      <h5 className='text-dark d-flex justify-content-center mb-3'>{category}</h5>
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
                            <img src={product?.thumbnail} alt={product.title} width={370} height={350}/>
                          </div>
                          <div className="course-item-info p-1">
                            <h6 className="mb-2 text-dark d-flex justify-content-center">
                              {product.title}
                            </h6>
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