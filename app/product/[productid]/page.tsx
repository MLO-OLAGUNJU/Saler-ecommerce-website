import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import React from "react";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  return (
    <div className="text-[#0F1111] select-none pt-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Ratings and Reviews</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
