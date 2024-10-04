import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center p-2 ">
      <div className="logo text-3xl font-extralight">
        <h2>Saad-Af Ahmed</h2>
      </div>
      <nav className="flex gap-4 text-xl font-extralight">
        <Link href={"/"} className="">
          Home{" "}
        </Link>
        <Link href={"/about"} className="">
          About{" "}
        </Link>
        <Link href={"/contact"} className="">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
