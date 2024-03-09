import React from "react";
import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Saler-- Admin Dashboard",
  description: "Saler Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[#0F1111] select-none ">
      <div>
        <AdminNav />
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
