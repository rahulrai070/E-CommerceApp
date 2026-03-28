import React from "react";
import { Link } from "react-router-dom";

function CartPage({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3 p-3">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" img-fluid rounded"
                    style={{ maxHeight: "120px", objectFit: "cover" }}
                  />
                </div>

                <div className="col-md-3">
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price}</p>
                </div>

                <div className="col-md-3">
                  <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  {item.quantity}

                  <button
                    className="btn btn-secondary btn-sm ms-2"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <div className="col-md-2">
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>

                <div className="col-md-1">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 text-end">
            <h3>Cart Total: ${total.toFixed(2)}</h3>

            <Link to="/checkout">
              <button className="btn btn-success mt-2">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
