"use client";

import { Rating } from "@mui/material";
import React from "react";

interface ProducDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[95%] h-[1px] mt-2 mb-2 bg-[#0F1111]" />;
};

const ProductDetails: React.FC<ProducDetailsProps> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-medium">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-start">{product.description}</div>
        <Horizontal />
        <div>
          <span className=" font-semibold">
            CATEGORY:<span>{product.category}</span>
          </span>
        </div>
        <div>
          <span className=" font-semibold">
            CATEGORY:<span>{product.brand}</span>
          </span>
        </div>
        <div>
          <span className=" font-semibold">
            CATEGORY:
            <span>{product.inStock ? "In stock" : "Out of stock"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
