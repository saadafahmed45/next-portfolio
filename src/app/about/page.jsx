"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutPage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 1, y: 50, ease: "power3.out" },
    });

    tl.from(titleRef.current, { duration: 1 })
      .from(subtitleRef.current, { duration: 2 }, "-=0.5")
      .from(paragraphRef.current, { duration: 1 }, "-=0.5");
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1
        ref={titleRef}
        className="text-center text-7xl font-extralight mt-10 mb-16"
      >
        AboutPage
      </h1>

      <div className="max-w-2xl mx-auto">
        <h2 ref={subtitleRef} className="text-3xl font-semibold mb-6">
          Hey, I'm Mohammad Haolader
        </h2>
        <p ref={paragraphRef} className="text-lg text-gray-700">
          I'm a developer focused on crafting user‑friendly experiences. I am
          passionate about building excellent software that improves the lives
          of those around me.
        </p>
      </div>
    </div>
  );
}
