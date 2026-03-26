import React from "react";

function OrderHistoryPage({ orders }) {
  if (orders.length === 0) {
    return (
      <div className=" container mt-5 text-center">
        <h2>No orders yet</h2>
      </div>
    );
  }
  return (
    <div className=" container mt-5">
      <h2>My Orders</h2>

      {orders.map((order, index) => (
        <div key={index} className=" card p-3 mb-3">
          <h5>Order #{order.id}</h5>

          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} — ${item.price} x {item.quantity}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrderHistoryPage;
