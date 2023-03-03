import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import { useSelector } from "react-redux";
import {
  useGetUsersQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
} from "../../../../app/services/userService";
import { useGetOrderByUseridQuery } from "../../../../app/services/orderUserService";
import { convertDate } from "../../../../utils/utils";

function UserAdminDetail() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { isLoading } = useGetUsersQuery();
  const { users } = useSelector((state) => state.users);

  const { isLoading2 } = useGetOrderByUseridQuery(userId);
  const { ordersUser } = useSelector((state) => state.ordersUser);


  

  const sum = (order) => {
    let sumPrice = 0;
    for (let i = 0; i < order?.orderItems.length; i++) {
      sumPrice +=
        order.orderItems[i].product.price * order.orderItems[i].amount;
    }
    return sumPrice;
  };

  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassWord, setNewPassword] = useState("");
  // const [defaultPassword, setDefaultPassword] = useState("");

  const user = users.find((u) => u.id === +userId);
  const [temp, setTemp] = useState([]);
  // Xử lý các side effect de mapping 2 chieu
  useEffect(() => {
    const fetchTodos = async () => {
      setTemp(user);
    };

    fetchTodos();
  }, [user]);

  const [file, setFile] = useState(null);
  const [editUser] = useUpdateUserMutation();
  const [uploadAvatar] = useUploadAvatarMutation();
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    uploadAvatar({ id: userId, file: formData })
      .unwrap()
      .then(() => {
        alert("Tạo thành công");
        setTimeout(() => {
          navigate(`/admin/users`);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  const updateUser = () => {
    if (temp.name === "") {
      alert("Tên không được để trống");
      return;
    }

    editUser({
      id: temp.id,
      name: temp.name,
      address: temp.address,
      phone: temp.phone,
    })
      .unwrap()
      .then(() => {
        alert("Cập Nhập thành công");
        setTimeout(() => {
          navigate("/admin/users");
        }, 1500);
      })
      .catch((err) => alert(err));
  };

  if (isLoading && isLoading2) {
    return <h3>Loading ...</h3>;
  }

  const forgotPassword = () => {};
  // const changePassword = () => {};
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Thông tin user</h2>

      <div className="row justify-content-center ">
        <div className="col-md-6">
          <div className="bg-light p-4 ">
            <div className="text-center mb-3 avatar-user-edit ">
              <label className="form-label">Avatar</label>
              <div className="avatar-preview mb-3 rounded">
                <img
                  src={
                    temp?.avatar
                      ? `${temp?.avatar}`
                      : "https://via.placeholder.com/150"
                  }
                  alt="avatar"
                  id="avatar-preview"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                />
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="avatar" className="btn btn-info">
                  Thay đổi
                </label>
                <input
                  onChange={handleOnChange}
                  type="file"
                  id="avatar"
                  className="d-none"
                />
                <button className="btn btn-success" type="submit">
                  Xác nhận
                </button>
              </form>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={temp?.name || ""}
                onChange={(e) => setTemp({ ...temp, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address</label>
              <input
                type="text"
                id="address"
                className="form-control"
                value={temp?.address || ""}
                onChange={(e) => setTemp({ ...temp, address: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">PhoneNumber</label>
              <input
                type="text"
                id="phone"
                className="form-control"
                value={temp?.phone || ""}
                onChange={(e) => setTemp({ ...temp, phone: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                disabled
                defaultValue={user?.email || ""}
              />
            </div>

            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-change-password"
                >
                  Đổi mật khẩu
                </button>
                <button
                  className="btn btn-warning"
                  id="btn-forgot-password"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-forgot-password"
                  onClick={forgotPassword}
                >
                  Quên mật khẩu
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-secondary btn-back">
              <Link className="navbar-brand" to={"/users"}>
                Quay lại
              </Link>
            </button>
            <button
              onClick={updateUser}
              className="btn btn-success"
              id="btn-save"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>

      <hr />
      <div className="shopping-cart-container mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-2">
              <h4 className="d-flex justify-content-center">History Order</h4>
            </div>
          </div>
        </div>
        <div className="row shopping-cart">
          {ordersUser.length === 0 && (
            <p className="fst-italic message"> Bạn chưa đặt đơn hàng nào</p>
          )}
          {ordersUser.length > 0 &&
            ordersUser.map((historyOrder) => (
              <div key={historyOrder.id} className="container mt-3 mb-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-2">
                      <div>
                        Status Order:
                        {historyOrder.status === false && (
                          <h4 style={{ color: "red" }}>Unconfirmed</h4>
                        )}
                        {historyOrder.status === true && (
                          <h4 style={{ color: "#00CC00" }}>Delivery</h4>
                        )}
                      </div>
                      <p>CreateAt: {convertDate(historyOrder.createAt)}</p>
                      <p>Address: {historyOrder.address}</p>
                    </div>
                  </div>
                </div>

                <div className="row shopping-cart">
                  <div className="col-md-8">
                    <div className="product-list">
                      {historyOrder?.orderItems.length > 0 &&
                        historyOrder?.orderItems.map((orderItem) => (
                          <div
                            key={orderItem.id}
                            className="product-item d-flex border mb-2"
                          >
                            <div className="anh ">
                              <img
                                src={orderItem.product.thumbnail}
                                alt="sản phẩm 1"
                              />
                            </div>
                            <div className="info d-flex flex-column justify-content-between px-4 py-2 flex-grow-1">
                              <div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <h2 className="text-dark fs-5 fw-normal">
                                    {orderItem.product.title}
                                  </h2>
                                  <h2 className="text-danger fs-5 fw-normal">
                                    {orderItem.product.price.toLocaleString(
                                      "en"
                                    )}
                                  </h2>
                                </div>
                                <div className="text-black-50">
                                  <div className="d-inline-block me-3">
                                    <span className="py-4  d-inline-block fw-bold">
                                      Quantity: {orderItem.amount}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bill">
                      <div className="border mb-2 p-3 fw-normal d-flex justify-content-between align-items-center">
                        <span className="text-black-50">Total:</span>
                        <span className="text-primary" id="sub-total-money">
                          $ {sum(historyOrder).toLocaleString("en")}
                        </span>
                      </div>
                      <div className="border mb-2 p-3 fw-normal d-flex justify-content-between align-items-center">
                        <span className="text-black-50">VAT (10%):</span>
                        <span className="text-primary" id="vat-money">
                          $ {(sum(historyOrder) * 0.1).toLocaleString("en")}
                        </span>
                      </div>
                      <div className="border mb-2 p-3 fw-normal d-flex justify-content-between align-items-center">
                        <span className="text-black-50">SubTotal:</span>
                        <span className="text-primary" id="total-money">
                          $ {(sum(historyOrder) * 1.1).toLocaleString("en")}
                        </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
        </div>
      </div>
    </div>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default UserAdminDetail;
