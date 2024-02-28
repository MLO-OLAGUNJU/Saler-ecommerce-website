import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import React from "react";
import ProductDetails from "./ProductDetails";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  return (
    <div className="text-[#0F1111] select-none p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
