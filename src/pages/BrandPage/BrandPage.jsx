import React from "react";
import Carousel from "../../components/Carousel";
import ExclusiveSale from "./components/ExclusiveSale";
import ProductBanner from "../Homepage/components/ProductBanner";
import ShopByCategory from "./components/ShopByCategory";

export default function BrandPage() {
  const data = [
    {
      image: "/images/carousel/carousel-1.png",
      alt: "carousel-2",
      heading: "The Best Tools for the Job",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div >
      <Carousel data={data} maxHeight="500px" />
      <ExclusiveSale />
      {/* <ProductBanner /> */}
      <ShopByCategory/>
    </div>
  );
}
