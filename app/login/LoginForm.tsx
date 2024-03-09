"use client";

import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCart } from "../hook/useCart";
import { SafeUser } from "@/types";
import Horizontal from "../components/Horizontal";

interface LoginFormProps {
  currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { handlesetIsLoggedIn, isLoggedIn } = useCart();

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

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged In");
        handlesetIsLoggedIn();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if (currentUser) {
    return (
      <p className="text-center">You are already signed in. Redirecting....</p>
    );
  }

  return (
    <>
      <Heading title="Login your account" />

      <Button
        outline
        label="Login with google"
        icon={FcGoogle}
        onClick={() => {
          signIn("google");
        }}
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
        label={isLoading ? "Logging you in...." : "Login"}
        onClick={handleSubmit(onSubmit)}
      />

      <p className="flex items-center gap-2">
        Do not have an Account?
        <Link href={"/register"} className="font-semibold">
          Create an account Here!
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
