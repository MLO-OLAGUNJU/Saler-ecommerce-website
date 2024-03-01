"use client";

import React, { useState } from "react";
import Heading from "../components/Heading";
import { Horizontal } from "../product/[productId]/ProductDetails";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Login your account" />

      <Button
        outline
        label="Login with google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Horizontal />
      <Input
        id="email"
        label="Email Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        autoFocus={false}
      />
      <Input
        id="password"
        label="Set a Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="password"
        required
        autoFocus={false}
      />

      <Button
        label={isLoading ? "Creating your account...." : "Login"}
        onClick={handleSubmit(onSubmit)}
      />

      <p className="flex items-center gap-2">
        Don't have an Account?
        <Link href={"/register"} className="font-semibold">
          Create an account Here!
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
