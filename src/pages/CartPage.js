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
        <div className=" text-center mt-5">
          <h3>Your cart is Empty 😢</h3>
          <Link to="/products" className=" btn btn-dark mt-3">
            Go Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className=" row">
            <div className=" col-lg-8">
              {cart.map((item) => (
                <div key={item.id} className="card mb-3 p-3 shadow-sm border-0">
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
                        className="btn btn-outline-dark btn-sm me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      {item.quantity}

                      <button
                        className="btn btn-outline-dark btn-sm ms-2"
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
            </div>
            <div className=" col-lg-4">
              <div className=" card p-4 shadow-sm border-0">
                <h5 className=" fw-bold mb-3">Order Summary</h5>

                <p className=" d-flex justify-content-between">
                  <span>Total Items:</span>
                  <span>{cart.length}</span>
                </p>

                <h4 className=" fw-bold text-success">
                  Total: ${total.toFixed(2)}
                </h4>

                <Link to="/checkout" className=" btn btn-dark w-100 mt-3">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}

export default CartPage;
