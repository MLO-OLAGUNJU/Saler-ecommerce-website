"use client";

import { CartProductType } from "@/app/product/[productid]/ProductDetails";
import React from "react";

interface setQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-black px-2 rounded";

const SetQauntity: React.FC<setQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex items-center gap-6">
        {cartCounter ? null : <div className=" font-semibold">QUALITY:</div>}
        <div className="flex gap-4 items-center text-base">
          <button onClick={handleQtyDecrease} className={btnStyles}>
            -
          </button>
          <div>{cartProduct.qauntity}</div>
          <button onClick={handleQtyIncrease} className={btnStyles}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetQauntity;
