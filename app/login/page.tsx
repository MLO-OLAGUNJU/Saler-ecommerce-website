import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";

const page = () => {
  return (
    <div className="text-[#0F1111] bg-white select-none">
      <Container>
        <FormWrap>
          <LoginForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default page;
