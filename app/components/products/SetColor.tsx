"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productid]/ProductDetails";
import React from "react";

interface setColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImgType) => void;
}
const SetColor: React.FC<setColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className=" flex gap-4 items-center">
        <span className=" font-semibold">COLOR:</span>
        <div className="flex items-center gap-1">
          {images.map((image) => {
            return (
              <div
                key={image.color}
                onClick={() => handleColorSelect(image)}
                className={` h-7 w-7 rounded-full border-blue-300 flex items-center justify-center ${
                  cartProduct.selectedImg.color === image.color
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
              >
                <div
                  style={{ background: image.colorCode }}
                  className=" h-5 w-5 rounded-full border-[1.2px] border-black cursor-pointer"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
