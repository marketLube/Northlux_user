import React, { useState } from "react";
import { useProducts } from "../../../hooks/queries/products";
import Card from "../../../components/Card";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("sholder bags");

  const { data, isLoading, error } = useProducts();

  console.log(data?.data?.products);

  const brands = [
    { name: "PRADA", image: "/images/brands/prada.png" },
    { name: "RAY-BAN", image: "/images/brands/rayban.png" },
    { name: "BALENCIAGA", image: "/images/brands/prada.png" },
    { name: "SUPREME", image: "/images/brands/rayban.png" },
    { name: "CARTIER", image: "/images/brands/prada.png" },
    { name: "HERMES", image: "/images/brands/prada.png" },
    { name: "ZARA", image: "/images/brands/prada.png" },
    { name: "CHANEL", image: "/images/brands/prada.png" },
  ];

  const categories = ["sholder bags", "t-shirts", "shoes", "bags", "sneakers"];

  return (
    <section className="shop-by-category">
      <h2>
        Shop By <span className="shop-by-category-span">Category</span>
      </h2>
      <div className="tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="content">
        {data?.data?.products?.map((product, index) => (
          <Card product={product} />
        ))}
      </div>

      {/* </div> */}
      <div className="shop-all">
        <p>Discover More from The Collection.</p>
        <a href="#">shop all →</a>
      </div>
    </section>
  );
};

export default ShopByCategory;
