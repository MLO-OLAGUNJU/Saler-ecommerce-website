"use client";
import { ImageType } from "@/app/admin/add-products/AddProductForm";
import React, { useCallback, useEffect, useState } from "react";

interface SelectColorProps {
  item: ImageType;
  addImageToState: (value: ImageType) => void;
  removeImageFromState: (value: ImageType) => void;
  isProductCreated: boolean;
}
const SelectColor: React.FC<SelectColorProps> = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false);
      setFile(null);
    }
  }, [isProductCreated]);

  const handleFileChange = useCallback((value: File) => {
    setFile(value);
    addImageToState({ ...item, image: value });
  }, []);

  const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);

    if (!e.target.checked) {
      setFile(null);
      removeImageFromState(item);
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 overflow-y-auto border-[1.2px] border-slate-200 items-center p-4">
        <div className="flex flex-row gap-2 items-center h-[60px] ">
          <input
            id={item.color}
            type="checkbox"
            checked={isSelected}
            onChange={handleCheck}
            className=" cursor-pointer"
          />
          <label htmlFor={item.color} className=" font-medium cursor-pointer">
            {item.color}
          </label>
        </div>
        <>
          {isSelected && !file && (
            <div className=" col-span-2 text-center"></div>
          )}
        </>
      </div>
    </>
  );
};

export default SelectColor;
