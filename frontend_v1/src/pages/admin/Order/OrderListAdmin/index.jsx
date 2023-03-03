import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../../../app/services/orderAdminService";
import { convertDate } from "../../../../utils/utils";

function OrderListAdmin() {
  const { isLoading } = useGetOrdersQuery();
  const { ordersAdmin } = useSelector((state) => state.ordersAdmin);

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div className="course-list mt-4 mb-4">
      <div className="container">
        <div className="mb-4"></div>

        <div className="course-list-inner p-2">
          <table className="table course-table product-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Avatar</th>
                <th>Người đặt hàng</th>
                <th>Trạng thái</th>
                <th>Ngày đặt</th>
                <th>Địa chỉ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ordersAdmin.map((order, index) => (
                <tr key={order.id}>
                  <td>
                    {" "}
                    <Link to={`/admin/orders/${order.id}`}>{index + 1}</Link>
                  </td>
                  <td>
                    <img
                      src={
                        order?.orderItems[0]?.account?.avatar
                          ? `${order?.orderItems[0]?.account?.avatar}`
                          : "https://via.placeholder.com/150"
                      }
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      alt={order?.orderItems[0]?.account?.name}
                    />
                  </td>
                  <td>
                    <Link
                      to={`/admin/users/${order?.orderItems[0]?.account.id}`}
                    >
                      {order?.orderItems[0]?.account.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/orders/${order.id}`}>
                      {order.status === false && (
                        <p style={{ color: "red" }}>Chưa xác nhận</p>
                      )}
                      {order.status === true && (
                        <p style={{ color: "#00CC00" }}>Đã xác nhận</p>
                      )}
                    </Link>
                  </td>
                  <td>{convertDate(order.createAt)}</td>
                  <td>{order.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderListAdmin;
