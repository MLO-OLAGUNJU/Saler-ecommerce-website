"use client";
import { ClassNames } from "@emotion/react";
import React from "react";
import { IconType } from "react-icons";

interface CategoryInpuProps {
  selected?: boolean;
  label: string;
  icon: IconType;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInpuProps> = ({
  selected,
  label,
  icon: Icon,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={` rounded-xl border-2 p-4 flex items-center gap-2 flex-col hover:border-slate-500 transition cursor-pointer ${
        selected ? "border-slate-500" : "border-slate-200"
      }`}
    >
      <Icon size={30} />
      <div className=" font-medium">{label}</div>
    </div>
  );
};

export default CategoryInput;
