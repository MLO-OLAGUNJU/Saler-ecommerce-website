"use client";

import React, { useState } from "react";
import Heading from "../components/Heading";
import { Horizontal } from "../product/[productId]/ProductDetails";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Create An Account" />

      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Horizontal />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        autoFocus={true}
      />
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
        label={isLoading ? "Creating your account...." : "Create account"}
        onClick={handleSubmit(onSubmit)}
      />

      <p className="flex items-center gap-2">
        Already have an Account?
        <Link href={"/login"} className="font-semibold">
          Login Here!
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
