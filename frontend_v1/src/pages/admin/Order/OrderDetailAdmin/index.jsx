import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useConfirmOrderMutation, useGetOrdersQuery} from "../../../../app/services/orderAdminService";
import { convertDate } from "../../../../utils/utils";

function OrderDetailAdmin() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const {isLoading} = useGetOrdersQuery();
  const { ordersAdmin } = useSelector((state) => state.ordersAdmin);

  const order = ordersAdmin.find((o) => o.id === +orderId);

  const [confirmOrder] = useConfirmOrderMutation();

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  let sumPrice = 0;
  //   for (let i = 0; i < order?.orderItems.length; i++) {
  //     sumPrice += order.orderItems[i].product.price * order.orderItems[i].amount;
  //   }

  let vat = sumPrice * 0.1;
  let sum = sumPrice + vat;
  const HandleConfirm = (id) => {
    confirmOrder(id)
      .unwrap()
      .then((res) => {
        toast.success("Đã xác nhận đơn hàng");
        setTimeout(() => {
          navigate(`/admin/orders`);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="shopping-cart-container mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-2">
              <div>
              {order?.status === false && (
                <p style={{ color: "red" }}>Unconfirmed</p>
              )}
              {order?.status === true && (
                <p style={{ color: "#00CC00" }}>Confirmed</p>
              )}
              </div>
              <span className="infor-user-comment">
                {" "}
                <img
                  src={
                    order?.orderItems[0]?.account?.avatar
                      ? `${order.orderItems[0]?.account?.avatar}`
                      : "https://via.placeholder.com/150"
                  }
                  className="rounded-circle"
                  style={{ width: "40px" }}
                  alt={order?.orderItems[0]?.account?.name}
                />{" "}
                <p style={{ marginBottom: "7px" }}>
                  {order?.orderItems[0]?.account.name}
                </p>
              </span>
              <p>CreatAt: {convertDate(order?.createAt)}</p>
              <p>Address: {order?.address}</p>
            </div>
          </div>
        </div>

        <div className="row shopping-cart">
          <div className="col-md-8">
            <div className="product-list">
              {order?.orderItems.length > 0 &&
                order?.orderItems.map((orderItem) => (
                  <div
                    key={orderItem.id}
                    className="product-item d-flex border mb-2"
                  >
                    <div className="anh ">
                      <img src={orderItem.product.thumbnail} alt="sản phẩm 1" />
                    </div>
                    <div className="info d-flex flex-column justify-content-between px-3 py-3 flex-grow-1">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="text-dark fw-normal">
                            {orderItem.product.title}
                          </h6>
                          <h2 className="text-danger fs-5 fw-normal">
                            {orderItem.product.price.toLocaleString("en")}
                          </h2>
                        </div>
                        <div className="text-black-50">
                          <div className="d-inline-block me-3">
                            <span className="py-4  d-inline-block fw-bold">
                              Amount: {orderItem.amount}
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
              <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">Total:</span>
                <span className="text-primary" id="sub-total-money">
                  {sumPrice.toLocaleString("en")} VND
                </span>
              </div>
              <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">VAT (10%):</span>
                <span className="text-primary" id="vat-money">
                  {vat.toLocaleString("en")} VND
                </span>
              </div>
              <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">SubTotal:</span>
                <span className="text-primary" id="total-money">
                  {sum.toLocaleString("en")} VND
                </span>
              </div>

              {order?.status === false && (
                <button
                  onClick={() => HandleConfirm(orderId)}
                  className="btn btn-success"
                >
                  Comfirm
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default OrderDetailAdmin;
