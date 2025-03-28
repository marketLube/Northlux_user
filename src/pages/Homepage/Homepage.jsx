import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Clearance from "./components/Clearance";
import Bestseller from "./components/Bestseller";
import Offer from "./components/Offer";
import Trending from "./components/Trending";
import Footer from "../../components/Footer";
import ShopBy from "./components/ShopBy";
import ProductBanner from "./components/ProductBanner";
import { useBanners } from "../../hooks/queries/banner";
const datas = [
  {
    image: "/images/carousel/carousel-1.png",
    alt: "carousel-2",
    heading: "The Best Tools for the Job",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/images/carousel/carousel-1.png",
    alt: "carousel-2",
    heading: "The Best Tools for the Job",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/images/carousel/carousel-1.png",
    alt: "carousel-2",
    heading: "The Best Tools for the Job",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Homepage() {
  const { allBanners, isLoading, error } = useBanners();

  return (
    <div>
      <Carousel data={allBanners?.filter((banner) => banner?.bannerFor === "hero")} />
      <ShopBy />
      <ProductBanner banners={allBanners} />
      <Clearance />
      <Bestseller />
      <Offer />
      <Trending />
    </div>
  );
}

export default Homepage;
