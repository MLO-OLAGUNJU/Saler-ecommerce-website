"use client";

import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckbox from "@/app/components/inputs/CustomCheckbox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { Categories } from "@/utils/Categories";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddProductForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      reviews: "",
    },
  });

  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value),
      {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      };
  };

  return (
    <>
      <Heading title="Add a Product" />
      <Input
        id="name"
        label="Name"
        disabled={loading}
        register={register}
        errors={errors}
        required
        autoFocus={true}
      />
      <Input
        id="price"
        label="Price"
        disabled={loading}
        register={register}
        errors={errors}
        type="number"
        required
        autoFocus={false}
      />
      <TextArea
        id="description"
        label="Description"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />

      <CustomCheckbox
        id={"inStock"}
        register={register}
        label="This Product is in stock"
      />

      <div className=" w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
          {Categories.map((item) => {
            if (item.label === "All") {
              return null;
            }
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
