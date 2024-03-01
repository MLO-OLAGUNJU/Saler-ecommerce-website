import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";

const page = () => {
  return (
    <div className="text-[#0F1111] bg-white select-none">
      <Container>
        <FormWrap>
          <RegisterForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default page;
