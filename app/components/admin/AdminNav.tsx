"use client";

import React from "react";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import Link from "next/link";
import { MdDashboard, MdDns, MdFormatListBulleted } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div className=" w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href={"/admin"}>
            <AdminNavItem
              label="Summary"
              selected={pathname === "/admin"}
              icon={MdDashboard}
            />
          </Link>
          <Link href={"/admin/add-products"}>
            <AdminNavItem
              label="Add Products"
              selected={pathname === "/admin/add-products"}
              icon={MdLibraryAdd}
            />
          </Link>
          <Link href={"/admin/manage-products"}>
            <AdminNavItem
              label="Manage Products"
              selected={pathname === "/admin/manage-products"}
              icon={MdDns}
            />
          </Link>
          <Link href={"/admin/manage-orders"}>
            <AdminNavItem
              label="Manage Orders"
              selected={pathname === "/admin/manage-orders"}
              icon={MdFormatListBulleted}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
