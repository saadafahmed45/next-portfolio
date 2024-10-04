"use client";
import React, { useEffect } from "react";
import { animatePageIn } from "./utils/animations";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed left-0 top-0 w-1/4"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-10 fixed left-1/4 top-0 w-1/4"
      ></div>
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-10 fixed left-2/4 top-0 w-1/4"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-10 fixed left-3/4 top-0 w-1/4"
      ></div>
      {children}
    </div>
  );
}
