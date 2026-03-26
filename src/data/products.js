import RunningShoes from "../components/Images/RunningShoes.jpg";
import Tshirt from "../components/Images/The-Ugly-Duckling-T-Shirt.jpg";
import Watch from "../components/Images/Watch.jpg";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 50,
    image: RunningShoes,
    description: "Comfortable running shoes for everyday workouts.",
    category: "Shoes",
    rating: 4,
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 20,
    image: Tshirt,
    description: "Stylish cotton t-shirt for casual wear.",
    category: "Clothing",
    rating: 5,
  },
  {
    id: 3,
    name: "Watch",
    price: 100,
    image: Watch,
    description: "Elegant wrist watch with modern design.",
    category: "Accessories",
    rating: 3,
  },
];

export default products;
