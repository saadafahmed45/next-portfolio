"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

const ProductDetails = () => {
  const images = [
    "https://images.pexels.com/photos/28354146/pexels-photo-28354146/free-photo-of-a-close-up-of-a-green-plant-growing-on-a-fence.jpeg",
    "https://images.pexels.com/photos/28354146/pexels-photo-28354146/free-photo-of-a-close-up-of-a-green-plant-growing-on-a-fence.jpeg",
    "https://images.pexels.com/photos/28354146/pexels-photo-28354146/free-photo-of-a-close-up-of-a-green-plant-growing-on-a-fence.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentImageIndex(index),
  };
  return (
    <div className="product-slider">
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={img}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 800px"
              alt={`Product image ${index + 1}`}
              className="w-full max-w-lg h-auto"
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={80}
            height={80}
            sizes="80px"
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-auto mx-2 cursor-pointer border-2 ${
              currentImageIndex === index
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => sliderRef.current?.slickGoTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
