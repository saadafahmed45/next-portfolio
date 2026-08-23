"use client";

import Link from "next/link";
import React from "react";

const TransitionLink = ({ href, label }) => {
  return (
    <Link href={href} className="text-gray-900 hover:text-gray-700">
      {label}
    </Link>
  );
};

export default TransitionLink;
