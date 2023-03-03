import React from "react";
import { useSelector } from "react-redux";
import { convertDate } from "../../../utils/utils";
import { useGetOrderByUseridQuery } from "../../../app/services/orderUserService";

function HistoryOrder() {
  const { auth } = useSelector((state) => state.auth);
  const { isLoading } = useGetOrderByUseridQuery(auth.id);
  const { ordersUser } = useSelector((state) => state.ordersUser);

   if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  const sum = (order) => {
    let sumPrice = 0;
    for (let i = 0; i < order?.orderItems.length; i++) {
      sumPrice +=
        order.orderItems[i].product.price * order.orderItems[i].amount;
    }
    return sumPrice;
  };
  return (
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
                  <div className="mb-3">
                    <h5>Order</h5>

                    <p>Ngày đặt: {convertDate(historyOrder.createAt)}</p>
                    <p>Địa chỉ: {historyOrder.address}</p>
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
                          className="product-item d-flex border mb-4"
                        >
                          <div className="anh ">
                            <img
                              src={orderItem.product.thumbnail}
                              alt="sản phẩm 1"
                            />
                          </div>
                          <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                            <div>
                              <div className="d-flex justify-content-between align-items-center">
                                <h2 className="text-dark fs-5 fw-normal">
                                  {orderItem.product.title}
                                </h2>
                                <h2 className="text-danger fs-5 fw-normal">
                                  {orderItem.product.price.toLocaleString("en")}
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
                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                      <span className="text-black-50">Total:</span>
                      <span className="text-primary" id="sub-total-money">
                        $ {sum(historyOrder).toLocaleString("en")}
                      </span>
                    </div>
                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                      <span className="text-black-50">VAT (10%):</span>
                      <span className="text-primary" id="vat-money">
                        $ {(sum(historyOrder) * 0.1).toLocaleString("en")}
                      </span>
                    </div>
                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                      <span className="text-black-50">SubTotal:</span>
                      <span className="text-primary" id="total-money">
                        $ {(sum(historyOrder) * 1.1).toLocaleString("en")}
                      </span>
                    </div>

                    <p>Status Order:</p>
                    {historyOrder.status === false && (
                      <h4 style={{ color: "red" }}>Chờ xác nhận</h4>
                    )}
                    {historyOrder.status === true && (
                      <h4 style={{ color: "#00CC00" }}>Đã hoàn thành</h4>
                    )}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HistoryOrder;
