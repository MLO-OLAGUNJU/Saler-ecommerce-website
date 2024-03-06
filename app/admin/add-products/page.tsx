import React from "react";
import AddProductForm from "./AddProductForm";
import Container from "@/app/components/Container";

const AddProducts = () => {
  return (
    <div className="pt-8 text-[#0F1111] select-none ">
      <Container>
        <AddProductForm />
      </Container>
    </div>
  );
};

export default AddProducts;
