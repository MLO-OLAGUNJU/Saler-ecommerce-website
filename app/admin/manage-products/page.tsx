import Container from "@/app/components/Container";
import React from "react";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProduct";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }

  return (
    <div className="p-8 bg-white text-[#0F1111] select-none ">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
