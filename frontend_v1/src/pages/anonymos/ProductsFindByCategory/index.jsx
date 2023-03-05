import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import productsApi from "../../../app/api/productsApi";

function ProductsFindByCategory() {
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  // Khởi tạo state ban đầu dựa trên url hiện tại
  const [filter, setFilter] = useState(() => {
    const params = queryString.parse(location.search);
    return {
      search: params.search || "",
      category: params.category || "",
    };
  });

  // Khi url thay đổi => parse lại url => lưu vào state
  useEffect(() => {
    const params = queryString.parse(location.search);
    // set category từ param
    setCategory(params.category);

    setFilter({
      search: params.search || "",
      category: params.category || "",
    });
  }, [location.search]);
  console.log(category);
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
      <h5 className="text-dark d-flex justify-content-center mb-3">
        {category}
      </h5>

      <div className="container">
        <div className="row">
          <div>
            {category === "Makeup" && (
              <div>
                <h6 className="text-dark d-flex justify-content-center">
                  A NEW COLLECTION OF COUTURE CASES - DIOR.COM EXCLUSIVE PREVIEW
                </h6>
                <img
                  src="https://www.dior.com/couture/var/dior/storage/images/horizon/beauty/make-up/dior-addict-incredible-shine-by-dior/03-a-new-collection-of-couture-cases/39506335-1-int-EN/03-a-new-collection-of-couture-cases_1440_1200.jpg"
                  alt="..."
                />
                <h7 className=" d-flex justify-content-center mx-5 mb-2">
                  Resolutely couture, the Dior Addict lipstick is dressed in
                  limited-edition cases with designs inspired by the latest
                  trends seen on the Dior runway.
                </h7>
              </div>
            )}

            {category === "SkinCare" && (
              <div>
                <h6 className="text-dark d-flex justify-content-center">
                  CAPTURE TOTALE
                </h6>
                <img
                  src="https://www.dior.com/couture/var/dior/storage/images/horizon/beauty/skincare/the-collections/capture-totale/01-capture-total-cover-2023/38886972-1-int-EN/01-capture-total-cover-2023_1440_1200.jpg"
                  alt="..."
                />
                <h7 className=" d-flex justify-content-center mx-5 mb-2">
                  For over 20 years, the Capture Totale anti-aging skincare line
                  has combined pioneering research on mother cells with the
                  power of Dior floral science to deliver a visible
                  transformation of the skin. Skin is visibly firmer, smoother
                  and younger.
                </h7>
              </div>
            )}

            {category === "WOMEN'S FRAGRANCE" && (
              <div>
                <h6 className="text-dark d-flex justify-content-center">
                  LA COLLECTION PRIVÉE CHRISTIAN DIOR
                </h6>
                <img
                  src="https://www.dior.com/couture/var/dior/storage/images/horizon/beauty/make-up/the-mitzah-collection/03-la-collection-privee-christian-dior/38551480-1-int-EN/03-la-collection-privee-christian-dior_1440_1200.png"
                  alt="..."
                />
                <h7 className=" d-flex justify-content-center mx-5 mb-2">
                  The mysterious scents of Gris Dior, Ambre Nuit and Oud Ispahan
                  unfurl to reveal the secret world of Mitzah. Dior has designed
                  a travel spray adorned with the iconic* leopard print inspired
                  by the House’s archives, so you can carry these fragrances
                  anywhere with style.
                </h7>
              </div>
            )}

            {category === "MEN'S FRAGRANCE" && (
              <div>
                <h6 className="text-dark d-flex justify-content-center">
                  DIOR HOMME
                </h6>
                <img
                  src="https://www.dior.com/couture/var/dior/storage/images/28905645/7-eng-GB/cover-dior-homme-sport-20224_1440_1200.jpg"
                  alt="..."
                />
                <h7 className=" d-flex justify-content-center mx-5 mb-2">
                  A spicy, woody scent with a distinctly sexy signature. A
                  subtle trail that leaves a unique impression, synonymous with
                  a style that’s alluring, casual and free.
                </h7>
              </div>
            )}
          </div>
          <div className="col-md-16">
            <h6 className="text-dark d-flex justify-content-center mb-3">
              OUR SELECTION
            </h6>
            <div className="course-list row">
              {products.length > 0 &&
                products.map((product) => (
                  <div key={product.id} className="col-md-4">
                    <Link to={`/products/${product.id}`}>
                      <div className="course-item shadow-sm rounded mb-4">
                        <div className="course-item-image text-center">
                          <img
                            src={product?.thumbnail}
                            alt={product.title}
                            width={370}
                            height={350}
                          />
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
  );
}

export default ProductsFindByCategory;
