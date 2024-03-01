"use client";
import { useCart } from "@/app/hook/useCart";
import { useRouter } from "next/navigation";
import { RiShoppingCartFill } from "react-icons/ri";

import React from "react";

const CartCount = () => {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      className=" relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl ">
        <RiShoppingCartFill />
        <span className="absolute top-[-10px] right-[-10px] h-6 w-6 rounded-full flex items-center justify-center text-sm bg-[#F9A024] text-white">
          {cartTotalQty}
        </span>
      </div>
    </div>
  );
};

export default CartCount;
