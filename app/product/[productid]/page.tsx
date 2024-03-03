import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import React from "react";
import { products } from "@/utils/products";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  const product = products.find((item) => item.id === params.productId);

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
