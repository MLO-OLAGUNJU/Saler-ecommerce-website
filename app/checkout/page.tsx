import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import CheckoutClient from "./CheckoutClient";

const Checkout = () => {
  return (
    <>
      <div className="text-[#0F1111] select-none pt-8 bg-white">
        <Container>
          <FormWrap>
            <CheckoutClient />
          </FormWrap>
        </Container>
      </div>
    </>
  );
};

export default Checkout;
