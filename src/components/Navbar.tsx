import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 items-center flex justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-10 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl flex-1 md:font-bold md:text-center lg:text-3xl">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute r-2 top-2 lg:static flex items-center gap cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" width={20} height={20} alt=""></Image>
          <span>123 456 78</span>
        </div>
        {user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
