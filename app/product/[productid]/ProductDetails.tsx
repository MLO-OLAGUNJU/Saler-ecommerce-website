"use client";

import Button from "@/app/components/Button";
import ProducImage from "@/app/components/products/ProducImage";
import ReturnsandDelivery from "@/app/components/products/ReturnsandDelivery";
import SetColor from "@/app/components/products/SetColor";
import SetQauntity from "@/app/components/products/SetQauntity";
import { Rating } from "@mui/material";
import React, { useCallback, useState } from "react";

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

export const Horizontal = () => {
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

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return {
          ...prev,
          selectedImg: value,
        };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.qauntity === 99) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, qauntity: prev.qauntity + 1 };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.qauntity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, qauntity: prev.qauntity - 1 };
    });
  }, [cartProduct]);

  return (
    <main className="lg:flex block gap-4">
      <div className="grid lg:mb-0 mb-5 grid-cols-1 md:grid-cols-2 rounded-md gap-12 w-[100%] lg:w-[90%] bg-[#FFFFFF] p-5">
        <ProducImage
          cartProduct={cartProduct}
          product={product}
          handleColorSelect={handleColorSelect}
        />
        <div className="flex flex-col gap-2">
          <h2 className="mb-3 text-4xl font-medium">{product.name}</h2>
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

            <span
              className={product.inStock ? "text-[#5BB300]" : "text-red-600"}
            >
              {product.inStock ? "In stock" : "Out of stock"}
            </span>
          </div>
          <Horizontal />
          <SetColor
            images={product.images}
            cartProduct={cartProduct}
            handleColorSelect={handleColorSelect}
          />
          <Horizontal />
          <SetQauntity
            cartProduct={cartProduct}
            handleQtyIncrease={handleQtyIncrease}
            handleQtyDecrease={handleQtyDecrease}
          />
          <Horizontal />
          <div className="">
            <Button label="Add To Cart" onClick={() => {}} />
          </div>
        </div>
      </div>
      <ReturnsandDelivery />
    </main>
  );
};

export default ProductDetails;
