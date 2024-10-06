import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 lg:px-24  gap-2 items-center p-2 bg-[#EDE8DC]">
      <div className="logo text-xl md:text-3xl font-extralight">
        <h2>Saad-Af</h2>
      </div>
      <nav className="flex gap-4 text-xl font-extralight">
        <Link href={"/"} className="">
          Home{" "}
        </Link>
        <Link href={"/about"} className="">
          About{" "}
        </Link>
        <Link href={"/portfolio"} className="">
          Portfolio{" "}
        </Link>
        <Link href={"/contact"} className="">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
