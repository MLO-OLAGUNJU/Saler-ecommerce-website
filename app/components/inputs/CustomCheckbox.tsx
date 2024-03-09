"use client";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomCheckBoxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  required: boolean;
}
const CustomCheckbox: React.FC<CustomCheckBoxProps> = ({
  id,
  label,
  disabled,
  required,
  register,
}) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center ">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        required={required}
        {...register(id)}
        placeholder=""
        type="checkbox"
        className=" cursor-pointer"
      />
      <label htmlFor={id} className=" font-medium cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
