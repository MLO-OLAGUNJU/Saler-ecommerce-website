"use client";
import React from "react";
import Container from "../Container";
import { categories } from "@/utils/Categories";
import CategoriesItems from "./CategoriesItems";
import {
  usePathname,
  useSearchParams,
} from "next/dist/client/components/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div className=" bg-white">
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoriesItems
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={
                category === item.label ||
                (category === null && item.label === "All")
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
