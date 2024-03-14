"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Find a product..."
        className=" text-black p-2 border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />

      <button
        onClick={handleSubmit(onSubmit)}
        className="flex items-center justify-center bg-slate-700 hover:opacity-80 text-white p-2 px-4 rounded-r-md"
      >
        <span>Find</span>
        <FaMagnifyingGlass size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
