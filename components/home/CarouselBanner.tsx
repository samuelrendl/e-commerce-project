"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import "@/styles/carousel.css";
import Link from "next/link";

interface CarouselBannerProps {
  images: {
    _id: string;
    src: string;
    alt: string;
    href: string;
  }[];
}

const CarouselBanner = ({ images }: CarouselBannerProps) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images.map((image) => (
          <Link key={image._id} href={image.href}>
            <AspectRatio ratio={2.35 / 1}>
              <div className="relative w-full, h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </AspectRatio>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBanner;
