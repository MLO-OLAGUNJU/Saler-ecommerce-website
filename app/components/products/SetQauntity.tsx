"use client";

import { CartProductType } from "@/app/product/[productid]/ProductDetails";
import React from "react";

interface setQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const SetQauntity: React.FC<setQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-6 items-center">
      <div>
        {cartCounter ? null : <div className=" font-semibold">QUALITY:</div>}
      </div>
    </div>
  );
};

export default SetQauntity;
