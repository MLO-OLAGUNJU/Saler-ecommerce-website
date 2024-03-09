import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="text-[#0F1111] bg-white select-none">
      <Container>
        <FormWrap>
          <LoginForm currentUser={currentUser} />
        </FormWrap>
      </Container>
    </div>
  );
};

export default page;
