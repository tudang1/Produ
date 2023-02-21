import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../../app/services/productService";
import { convertDate } from "../../../../utils/utils";

function ProductAdminList() {
  const { products } = useSelector((state) => state.products);
  const { isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = (id) => {
    const isConfirm = window.confirm("Bạn có muốn xóa không?");
    if (isConfirm) {
      deleteProduct(id)
        .unwrap()
        .then(() => alert("Xóa thành công"))
        .catch((err) => console.log(err));
    }
  };

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div className="container">
      <div className="course-list mt-4 mb-4">
        <div>
          <div className="mb-4">
            <Link
              to={"/admin/products/create"}
              className="btn-custom btn-create-course"
            >
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              New Product
            </Link>
          </div>

          <div className="course-list-inner p-2">
            <table className="table course-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Thumbnail</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>CreateAt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product,index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/admin/products/${product.id}`}>
                        {product.title}
                      </Link>
                    </td>
                    <td>
                      {" "}
                      <img
                        src={
                          product?.thumbnail
                            ? `${product?.thumbnail}`
                            : "https://via.placeholder.com/150"
                        }
                        alt="thumbnail"
                        id="thumbnail-preview"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{product.category.name}</td>
                    <td>{product.price}</td>
                    <td>{convertDate(product.createdAt)}</td>
                    <td>
                      <button className="btn btn-info">
                        <Link to={`/admin/products/${product.id}`}>Edit</Link>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdminList;
