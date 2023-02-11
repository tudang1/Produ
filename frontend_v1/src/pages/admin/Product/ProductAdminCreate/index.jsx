import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import SimpleMdeReact from "react-simplemde-editor";
import productsApi from "../../../../app/api/productsApi";
import { useGetCategoriesQuery } from "../../../../app/services/categoryService";
import { useCreateProductMutation } from "../../../../app/services/productService";

function ProductAdminCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);

  const { categories } = useSelector((state) => state.categories);
  const { isLoading } = useGetCategoriesQuery();
  const [createProduct] = useCreateProductMutation();
  const dispatch = useDispatch();

  const options = categories.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  // console.log(options);

    const handleCreateProduct = () => {
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
      };
      console.log(newProduct);
      createProduct(newProduct)
        .unwrap()
        .then(() => alert("Tạo thành công"))
        .catch((err) => console.log(err));

      // Dispatch event để tạo todo
      // dispatch(createProduct());
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
            onClick={handleCreateProduct}
          >
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Tạo
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
                  Description
                </label>
                {/* <SimpleMdeReact
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                /> */}
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="course-topic" className="form-label fw-bold">
                  Category
                </label>
                <Select options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdminCreate;