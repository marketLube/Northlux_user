import React from "react";
import Carousel from "../../../components/Carousel";

const data = [
  {
    image: "/images/carousel/carousel-1.png",
    alt: "carousel-1",
    heading: `Strength in Every Tool.
      in Every Task.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/images/carousel/banner.jfif",
    alt: "carousel-1",
    heading: `Strength in Every Tool.
   in Every Task.`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},
];

export default function ProductBanner() {
  return (
    <div className="product-banner">
      <Carousel data={data} maxHeight="500px" />
      <div className="product-banner-arrow-buttons">
        <button>previous</button>
        <button>next</button>
      </div>
    </div>
  );
}
