"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { animatePageOut } from "../utils/animations";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname == href) {
      animatePageOut(href, router);
    }
  };

  return (
    <div>
      <button
        className="text-gray-900  hover:text-gray-700 "
        onClick={handleClick}
      >
        {" "}
        {label}
      </button>
    </div>
  );
};

export default TransitionLink;
