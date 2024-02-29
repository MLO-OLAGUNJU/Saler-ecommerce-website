import React from "react";
import Container from "../components/Container";
import CartClient from "./CartClient";

const Cart = () => {
  return (
    <div className="pt-8 text-[#0F1111] select-none ">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
};

export default Cart;
