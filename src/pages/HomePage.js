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

function HomePage() {
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 70,
      image: RunningShoes,
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 20,
      image: Tshirt,
    },
    {
      id: 3,
      name: "Watch",
      price: 100,
      image: Watch,
    },
    {
      id: 4,
      name: "Smart-Watch",
      price: 250,
      image: SmartWatch,
    },
    {
      id: 5,
      name: "slippers",
      price: 90,
      image: Slippers,
    },
    {
      id: 6,
      name: "Smart_Phone",
      price: 1000,
      image: Phone,
    },
    {
      id: 7,
      name: "Jeans",
      price: 30,
      image: Jeans,
    },
    {
      id: 8,
      name: "Cotton Shirt",
      price: 45,
      image: Shirt,
    },
    {
      id: 9,
      name: "Office-Shoes",
      price: 100,
      image: OfficeShoes,
    },
  ];

  return (
    <div className="container mt-4 g-4">
      <div className="bg-dark text-white text-center p-5 rounded mb-5">
        <h1 className=" display-4">Welcome to MyStore</h1>
        <p className=" lead">Best Deals on Fashion & Electronics</p>

        <Link to="/products" className="btn btn-warning btn-lg mt-3">
          Shop Now
        </Link>
      </div>

      <h2 className="mb-4 text-center">Featured Products</h2>

      <div className="row">
        {products.slice(0, 4).map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <h2 className=" mt-5 mb-4 text-center">Shop by Category</h2>

      <div className="row text-center">
        <div className=" col-md-4 mb-3">
          <div className=" card p-4 shadow-sm">Clothing</div>
        </div>

        <div className=" col-md-4 mb-3">
          <div className=" card p-4 shadow-sm">Shoes</div>
        </div>

        <div className=" col-md-4 mb-3">
          <div className=" card p-4 shadow-sm">Electronics</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
