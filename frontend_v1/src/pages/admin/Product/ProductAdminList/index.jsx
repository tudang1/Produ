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
            <div >
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
                                <th>Tiêu đề</th>
                                <th>Danh mục</th>
                                <th>Ngày tạo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <Link to={`/admin/products/${product.id}`}>
                                            {product.title}
                                        </Link>
                                    </td>
                                    <td>
                                        {product.category.name}
                                    </td>
                                    <td>{convertDate(product.createdAt)}</td>
                                    <td>
                                        <button
                                            className="btn btn-info"
                                        >
                                            <Link to={`/admin/products/${product.id}`}>Edit</Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDeleteProduct(product.id)
                                            }
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
