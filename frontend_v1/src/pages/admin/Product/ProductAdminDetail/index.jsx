import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import SimpleMdeReact from "react-simplemde-editor";
import productsApi from "../../../../app/api/productsApi";
import { useGetCategoriesQuery } from "../../../../app/services/categoryService";
import { useCreateProductMutation, useUpdateProductMutation } from "../../../../app/services/productService";

function ProductAdminDetail() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState([]);

  const { productId } = useParams();
  const [product,setProduct] = useState([]);

  const { categories } = useSelector((state) => state.categories);
  const { isLoading } = useGetCategoriesQuery();
  const [updateProduct] = useUpdateProductMutation();

  //lấy product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productsApi.getProductById(productId);
        setProduct(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setCategoryId(res.data.category.id);
        setImageUrl(res.data.image.imageUrl);
        setDescription(res.data.description);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleUpdateProduct = () => {
   
    if (!title) {
      alert("Tiêu đề không được để trống");
      return;
    }
    //tao product moi
    let newProduct = {
      title: title,
      price: price,
      description: description,
      imageUrl: imageUrl,
      categoryId: categoryId,
    };
    console.log(newProduct);
    updateProduct({productId,...newProduct})
      .unwrap()
      .then(() => alert("Cập Nhập thành công"))
      .catch((err) => console.log(err));

    setTitle("");
  };

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div className="course-list mt-4 mb-4">
      <div className="container">
        <div className="mb-4">
          <button
            className="btn-custom btn-create-course"
            onClick={()=>handleUpdateProduct()}
          >
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Update
          </button>
          <Link to={"/admin/products"} className="btn-custom btn-refresh">
            <span>
              <i className="fa-solid fa-angle-left"></i>
            </span>
            Quay lại
          </Link>
        </div>

        <div className="course-list-inner p-2">
          <div className="row">
            <div className="col-md-8">
              <div className="mb-3">
                <label htmlFor="course-name" className="form-label fw-bold">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="course-name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="course-content" className="form-label fw-bold">
                  ImageUrl
                </label>
                <input
                  type="imageUrl"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="https://"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />

                {/* <SimpleMdeReact
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                /> */}
                {/* <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                /> */}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1 course-content"
                  className="form-label fw-bold"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="7"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label
                  htmlFor="course-description"
                  className="form-label fw-bold"
                >
                  Price
                </label>
                <input
                  className="form-control"
                  id="course-description"
                  rows="5"
                  value={product.price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="course-topic" className="form-label fw-bold">
                  Category
                </label>
                {/* <Select options={options} /> */}
                <br />
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option hidden>Select...</option>
                  {categories.map((p) => (
                    <option value={p.id} key={p.id} label= {p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdminDetail;
