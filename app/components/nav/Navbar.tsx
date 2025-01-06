"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import NavBarLinks from "./NavBarLinks";
import Burger from "./Burger";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="relative w-full flex items-center p-5 z-10">
      {" "}
      <Image
        className="mr-auto cursor-pointer"
        src="/pencil-logo-cropped.png"
        alt="Ninja logo"
        height="100"
        width="100"
        quality={100}
        onClick={() => router.push("/")}
        priority
      />
      <NavBarLinks />
      <Burger />
    </nav>
  );
};
export default Navbar;
