"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const ProductDetails = () => {
  const images = [
    "https://images.pexels.com/photos/28354146/pexels-photo-28354146/free-photo-of-a-close-up-of-a-green-plant-growing-on-a-fence.jpeg",
    "https://images.pexels.com/photos/28354146/pexels-photo-28354146/free-photo-of-a-close-up-of-a-green-plant-growing-on-a-fence.jpeg",
    "https://images.pexels.com/photos/28354146/pexels-photo-28354146/free-photo-of-a-close-up-of-a-green-plant-growing-on-a-fence.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentImageIndex(next),
  };
  return (
    <div className="product-slider">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={img}
              alt={`Product image ${index + 1}`}
              className="w-full max-w-lg h-auto"
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-auto mx-2 cursor-pointer border-2 ${
              currentImageIndex === index
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
