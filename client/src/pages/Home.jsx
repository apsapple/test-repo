import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";
import { arr } from "../assets/imageExport";

const Home = () => {
  const bestSellersProducts = [
    {
      _id: "demo1",
      img: arr[0],
      title: "Adidas Ultraboost Running Shoes",
      brand: "Adidas",
      category: "men",
      rating: 4.5,
      reviews: 1250,
      sellPrice: 2499,
      mrp: 4999,
      discount: 50
    },
    {
      _id: "demo2",
      img: arr[1],
      title: "Nike Air Max Sneakers",
      brand: "Nike",
      category: "women",
      rating: 4.7,
      reviews: 980,
      sellPrice: 3299,
      mrp: 5999,
      discount: 45
    }
  ];

  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
    
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="prose prose-2xl">
          <ShopBy title="Best Sellers" staticProducts={bestSellersProducts} />
        </div>
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
