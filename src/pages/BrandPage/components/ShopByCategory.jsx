import React, { useState } from "react";
import { useProducts } from "../../../hooks/queries/products";
import Card from "../../../components/Card";
import Pagination from "../../../components/Pagination";

const ShopByCategory = ({id}) => {
  const [activeTab, setActiveTab] = useState("sholder bags");

  const { data, isLoading, error } = useProducts({brandId:id});


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
      {data?.data?.products?.length > 0 ? <div className="content">
        {data?.data?.products?.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div> : <div>No products found</div>}

      {data?.data?.products?.length > 0 && <div className="pagination">
        <Pagination />
      </div>}

      {/* </div> */}
      <div className="shop-all">
        <p>Discover More from The Collection.</p>
        <a href="#">shop all →</a>
      </div>
    </section>
  );
};

export default ShopByCategory;
