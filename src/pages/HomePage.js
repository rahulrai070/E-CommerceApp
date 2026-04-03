import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import RunningShoes from "../components/Images/RunningShoes.jpg";
import Tshirt from "../components/Images/The-Ugly-Duckling-T-Shirt.jpg";
import Watch from "../components/Images/Watch.jpg";
import SmartWatch from "../components/Images/SmartWatch.png";
import Shirt from "../components/Images/CottonShirt.webp";
import Slippers from "../components/Images/sketchers.png";
import Phone from "../components/Images/phone.png";
import OfficeShoes from "../components/Images/OfficeShoes.webp";
import Jeans from "../components/Images/Jeans.webp";
import Cover from "../components/Images/CoverImage.avif";

function HomePage({ addToCart }) {
  const products = [
    { id: 1, name: "Running Shoes", price: 70, image: RunningShoes },
    { id: 2, name: "T-Shirt", price: 20, image: Tshirt },
    { id: 3, name: "Watch", price: 100, image: Watch },
    { id: 4, name: "Smart-Watch", price: 250, image: SmartWatch },
    { id: 5, name: "Slippers", price: 90, image: Slippers },
    { id: 6, name: "Smart Phone", price: 1000, image: Phone },
    { id: 7, name: "Jeans", price: 30, image: Jeans },
    { id: 8, name: "Cotton Shirt", price: 45, image: Shirt },
    { id: 9, name: "Office Shoes", price: 100, image: OfficeShoes },
  ];

  return (
    <div className="container py-4">
      {/* HERO SECTION */}
      <div
        className="position-relative rounded overflow-hidden d-flex align-items-center justify-content-center text-center mb-5"
        style={{
          height: "300px",
          backgroundImage: `url(${Cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        {/* Content */}
        <div className="position-relative text-white">
          <h1 className="display-5 fw-bold">Welcome to MyStore</h1>
          <p className="lead">Best Deals on Fashion & Electronics</p>

          <Link
            to="/products"
            className="btn btn-warning btn-lg mt-3 px-5 shadow"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <h2 className="text-center fw-bold mb-4">Featured Products</h2>

      <div className="row">
        {products.slice(0, 4).map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>

      {/* CATEGORY SECTION */}
      <h2 className="text-center fw-bold mt-5 mb-4">Shop by Category</h2>

      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <Link
            to="/products?category=Clothing"
            className=" text-decoration-none text-dark"
          >
            <div className="card p-4 shadow-sm h-100">
              <h4>👕 Clothing</h4>
              <p className="text-muted">Trendy and comfortable outfits</p>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-3">
          <Link
            to="/products?category=Shoes"
            className=" text-decoration-none text-dark"
          >
            <div className="card p-4 shadow-sm h-100">
              <h4>👟 Shoes</h4>
              <p className="text-muted">Stylish and durable footwear</p>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-3">
          <Link
            to="/products?category=Electronics"
            className=" text-decoration-none text-dark"
          >
            <div className="card p-4 shadow-sm h-100">
              <h4>📱 Electronics</h4>
              <p className="text-muted">Latest gadgets and devices</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
