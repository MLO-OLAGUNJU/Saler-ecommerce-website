"use client";

import { Rating } from "@mui/material";
import React, { useState } from "react";

interface ProducDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  qauntity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="borderBottom" />;
};

const ProductDetails: React.FC<ProducDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    qauntity: 1,
    price: product.price,
  });

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-2">
        <h2 className="mb-3 text-5xl font-medium">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-start">{product.description}</div>
        <Horizontal />
        <div className="flex items-center gap-2">
          <span className=" font-semibold">CATEGORY: </span>
          <span>{product.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className=" font-semibold">BRAND: </span>
          <span>{product.brand}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className=" font-semibold">AVAILABLE: </span>

          <span className={product.inStock ? "text-[#5BB300]" : "text-red-600"}>
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <Horizontal />
        <div>color</div>
        <Horizontal />
        <div>qaulity</div>
        <Horizontal />
        <div>Add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
