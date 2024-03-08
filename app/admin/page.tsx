import { getCurrentUser } from "@/actions/getCurrentUser";
import React from "react";
import NullData from "../components/NullData";
import Summary from "./Summary";
import getProducts from "@/actions/getProduct";
import getOrders from "@/actions/getOrders";
import getUsers from "@/actions/getUsers";
import Container from "../components/Container";
import BarGraph from "./BarGraph";
import getGraphData from "@/actions/getGraphData";

const Admin = async () => {
  const currentUser = await getCurrentUser();
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();
  const graphData = await getGraphData();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }
  return (
    <div className="pt-8 text-[#0F1111] select-none bg-white ">
      <Container>
        <Summary products={products} orders={orders} users={users} />
        <div className="mt-4 mx-auto max-w-[1150px]">
          <BarGraph data={graphData} />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
