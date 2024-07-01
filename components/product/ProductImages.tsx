"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductImagesProps {
  images: string[];
  alt: string;
}

const ProductImages = ({ images, alt }: ProductImagesProps) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  return (
    <div className="my-8 max-w-64 md:max-w-96">
      <Slider {...settings}>
        {images.map((image, index: any) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              height={500}
              width={500}
              className="max-h-72 md:max-h-96 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImages;
