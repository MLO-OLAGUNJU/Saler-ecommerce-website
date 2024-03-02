"use client";

import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { FaCaretDown } from "react-icons/fa6";
import Link from "next/link";
import MenuItems from "./MenuItems";
import { signOut } from "next-auth/react";
import BkDrop from "./BkDrop";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30 bg-[#F9A024] rounded-full cursor-pointer">
        <div
          className="flex flex-row items-center justify-center px-4 p-3 gap-1 hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <Avatar />
          <FaCaretDown className="text-[#fff]" />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white text-black overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            <div>
              <Link href={"/orders"}>
                <MenuItems onClick={toggleOpen}>Your Orders</MenuItems>
              </Link>
              <Link href={"/admin"}>
                <MenuItems onClick={toggleOpen}>Admin Dashboard</MenuItems>
              </Link>
              <MenuItems
                onClick={() => {
                  toggleOpen();
                  signOut;
                }}
              >
                Log out
              </MenuItems>
            </div>
            <div>
              <Link href={"/login"}>
                <MenuItems onClick={toggleOpen}>Log in</MenuItems>
              </Link>
              <Link href={"/register"}>
                <MenuItems onClick={toggleOpen}>Create an account</MenuItems>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isOpen ? <BkDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
