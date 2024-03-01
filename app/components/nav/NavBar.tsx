import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";
import CartCount from "./CartCount";

const redressed = Shadows_Into_Light({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-[#131921] select-none z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${redressed.className} text-3xl md:text-5xl font-bold text-[#F9A024]`}
            >
              Saler.io
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
