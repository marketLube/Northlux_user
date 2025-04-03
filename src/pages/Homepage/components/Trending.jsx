import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "../../../components/Card";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../../hooks/queries/products";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { FiArrowRight as ViewAllIcon } from "react-icons/fi";

function Trending() {
  const { data: response, isLoading, error } = useProducts();
  const navigate = useNavigate();
  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  const trendingProducts = response?.data?.products || [];

  const handleViewAll = () => {
    navigate("/products", {
      state: {
        selectedLabel: { _id: "67e3bee5734dabfc5c7e4c59", name: "Clearance" },
      },
    });
  };

  return (
    <section className="trending-container" data-aos="fade-up">
      <div className="trending-header">
        <h2>
          Trending <span>This Week</span>
        </h2>
      </div>
      <p onClick={handleViewAll} className="view-all desktop-view-all">
          View All <ViewAllIcon/>
        </p>

      <div className="trending-grid">
        {trendingProducts?.slice(0, 8).map((product) => (
          <Card key={product?._id} product={product} />
        ))}
      </div>

      <div className="trending-footer">
        <p>Don't miss out! Explore all trending styles</p>
        <Link to="/products">Shop all →</Link>
      </div>
    </section>
  );
}

export default Trending;
