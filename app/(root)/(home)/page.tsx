import CarouselBanner from "@/components/home/CarouselBanner";
import ProductsGrid from "@/components/shared/ProductsGrid";
import React from "react";

const bannerImages = [
  {
    _id: "1",
    src: "/carouselImages/iphone.png",
    alt: "iPhone",
    href: "/",
  },
  {
    _id: "2",
    src: "/carouselImages/samsung.png",
    alt: "Samsung",
    href: "/",
  },
  {
    _id: "3",
    src: "/carouselImages/xiaomi.png",
    alt: "Xiaomi",
    href: "/",
  },
];

const Home = () => {
  return (
    <main className="container px-4">
      <div className="my-5">
        <CarouselBanner images={bannerImages} />
      </div>
      <ProductsGrid />
    </main>
  );
};

export default Home;
