"use client";

import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckbox from "@/app/components/inputs/CustomCheckbox";
import Input from "@/app/components/inputs/Input";
import SelectColor from "@/app/components/inputs/SelectColor";
import TextArea from "@/app/components/inputs/TextArea";
import firebaseApp from "@/libs/firebase";
import { categories } from "@/utils/Categories";
import { colors } from "@/utils/Colors";
import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";

export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const AddProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImageType[] | null>(null);

  const [isProductCreated, setIsProductCreated] = useState(false);

  const router = useRouter();

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

  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);

  useEffect(() => {
    if (isProductCreated) {
      reset();
      setImages(null);
      setIsProductCreated(false);
    }
  }, [isProductCreated]);

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Product Data", data);

    // upload images to firebase
    //save procuct to mongodb
    setLoading(true);
    let uploadedImages: UploadedImageType[] = [];

    if (!data.category) {
      setLoading(false);
      return toast.error("Category is not selected");
    }

    if (!data.images || data.images.length === 0) {
      setLoading(false);
      return toast.error("No iamge was selected");
    }

    const handleImageUpload = async () => {
      toast("Creating product, please wait....");
      try {
        for (const item of data.images) {
          if (item.image) {
            const fileName = new Date().getTime() + "-" + item.image.name;
            const storage = getStorage(firebaseApp);
            const storageRef = ref(storage, `products/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.image);

            await new Promise<void>((resolve, reject) => {
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                  switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                  }
                },
                (error) => {
                  //Handle unsucessful uploads
                  console.log("Upload error", error);
                  reject(error);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                      uploadedImages.push({
                        ...item,
                        image: downloadURL,
                      });
                      console.log("File available at ", downloadURL);
                      resolve();
                    })
                    .catch((error) => {
                      console.log("Error getting the downloadable URL", error);
                      reject(error);
                    });
                }
              );
            });
          }
        }
      } catch (error) {
        setLoading(false);
        console.log("Error handling image uploads", error);
        return toast.error("Error handling image uploads");
      }
    };

    await handleImageUpload();
    const productData = { ...data, images: uploadedImages };

    axios
      .post("/api/product", productData)
      .then(() => {
        toast.success("Product created");
        setIsProductCreated(true);
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong saving the product to the db");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value),
      {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      };
  };

  const addImageToState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (!prev) {
        return [value];
      }

      return [...prev, value];
    });
  }, []);

  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (prev) {
        const filteredImages = prev.filter(
          (item) => item.color !== value.color
        );

        return filteredImages;
      }
      return prev;
    });
  }, []);

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
      <Input
        id="brand"
        label="Brand"
        disabled={loading}
        register={register}
        errors={errors}
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
        required={true}
        label="This Product is in stock"
      />

      <div className=" w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
          {categories.map((item) => {
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

      <div className="w-full flex flex-col flex-wrap gap-4">
        <div>
          <div className=" font-bold mb-2 ">
            Select the available product colors and upload their pages
          </div>
          <div className="text-sm italic">
            You must upload an image for each of the color selected otherwise
            your color selection will be ignored
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return (
              <SelectColor
                key={index}
                item={item}
                addImageToState={addImageToState}
                removeImageFromState={removeImageFromState}
                isProductCreated={isProductCreated}
              />
            );
          })}
        </div>
      </div>
      <Button
        label={loading ? "Loading..." : "Add Products"}
        onClick={handleSubmit(onsubmit)}
      />
    </>
  );
};

export default AddProductForm;
