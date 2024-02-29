"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productid]/ProductDetails";
import Image from "next/image";
import React from "react";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}

const ProducImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`relative w-[80%] aspect-square rounded border-blue-300 ${
                cartProduct.selectedImg.color === image.color
                  ? "border-[1.5px]"
                  : "border-none"
              }`}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain relative"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          fill
          className="h-full object-contain  max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProducImage;