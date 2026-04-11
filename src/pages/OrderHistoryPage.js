import React from "react";

function OrderHistoryPage({ orders }) {
  if (!orders || orders.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>No orders yet 😢</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">My Orders</h2>

      {orders.map((order, index) => {
        const total = order.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );

        return (
          <div key={index} className="card shadow-sm border-0 mb-4 p-3">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="fw-bold">Order #{order.id}</h5>
              <span className="text-muted">
                {new Date().toLocaleDateString()}
              </span>
            </div>

            <hr />

            {order.items.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}

            <hr />

            <h6 className="text-end text-success fw-bold">
              Total: ${total.toFixed(2)}
            </h6>
          </div>
        );
      })}
    </div>
  );
}

export default OrderHistoryPage;
