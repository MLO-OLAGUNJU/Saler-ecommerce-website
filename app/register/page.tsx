import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="text-[#0F1111] bg-white select-none">
      <Container>
        <FormWrap>
          <RegisterForm currentUser={currentUser} />
        </FormWrap>
      </Container>
    </div>
  );
};

export default page;
