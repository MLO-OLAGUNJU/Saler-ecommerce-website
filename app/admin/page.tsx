import { getCurrentUser } from "@/actions/getCurrentUser";
import React from "react";
import NullData from "../components/NullData";

const Admin = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }
  return <div className="pt-8 text-[#0F1111] select-none ">Admin Page</div>;
};

export default Admin;
