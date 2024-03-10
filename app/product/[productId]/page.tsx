import Container from "@/app/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import { getCurrentUser } from "@/actions/getCurrentUser";

interface IPrams {
  productId: string;
}

const Product = async ({ params }: { params: IPrams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product) return <NullData title="Oops! Product not found!" />;

  return (
    <div className="text-[#0F1111] select-none pt-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
