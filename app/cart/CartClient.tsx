"use client";

import React from "react";
import { useCart } from "../hook/useCart";
import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";

const CartClient = () => {
  const { cartProducts, handleClearCart } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className=" text-2xl">Your cart is empty</div>
        <div>
          <Link href={"/"} className=" flex items-center gap-1 mt-2">
            <FaRegArrowAltCircleLeft />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#E6E6E6] ">
      <Heading title="Shopping Cart" />

      {/* <div className="bg-[#F89F24] w-fit p-4 my-5 rounded-lg h-fit"> */}
      <Link
        href={"/"}
        className="bg-[#131921] w-fit p-2 my-5 rounded-lg h-fit flex items-center text-white gap-1"
      >
        <FaRegArrowAltCircleLeft />
        <span className="text-[12px]">Continue Shopping</span>
      </Link>
      {/* </div> */}

      <div className="lg:flex block gap-4">
        <div className="w-[100%] lg:w-[90%] bg-[#FFFFFF] p-5">
          <div className="grid grid-cols-5 text-xs gap-4  items-center bg-white p-5 font-semibold">
            <div className="col-span-2 justify-self-start">PRODUCT</div>
            <div className=" justify-self-center">PRICE</div>
            <div className=" justify-self-center">QUANTITY</div>
            <div className="justify-self-end">TOTAL</div>
          </div>

          <div>
            {cartProducts &&
              cartProducts.map((item) => {
                return <ItemContent key={item.id} item={item} />;
              })}
          </div>
        </div>

        <div className=" p-4 bg-white flex flex-col justify-between gap-4 h-fit lg:mt-0 mt-5">
          <div className="text-sm flex flex-col gap-1 py-5">
            <div className="flex justify-between text-base font-semibold">
              <span>Subtotal</span>
              <span>$8,996</span>
            </div>
            <p className=" text-red-600 my-3">
              Taxes and shipping calculated at checkout
            </p>
            <Button label="Continue to Checkout" onClick={() => {}} />

            <div className="w-[90px] my-5">
              <Button
                label="Clear Cart"
                onClick={() => {
                  handleClearCart();
                }}
                small
                outline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
