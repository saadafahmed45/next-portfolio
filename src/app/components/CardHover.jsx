"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
const CardHover = () => {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      y: "-50%", // Adjust this based on the image height (e.g., -50% for half the image height)
      duration: 2,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      y: "0%",
      duration: 2,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      className="relative w-64 h-64 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        ref={imageRef}
        src="/projects/ira_fasion.jpg"
        width={640}
        height={640}
        alt="Scrolling Image"
        className="w-full h-auto"
      />
    </div>
  );
};

export default CardHover;
