"use client";

import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import Horizontal from "../components/Horizontal";

interface RegisterFormProps {
  currentUser?: SafeUser | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {
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

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created successfully");
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }

          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (currentUser) {
    return (
      <p className="text-center">You are already signed in. Redirecting....</p>
    );
  }

  return (
    <>
      <Heading title="Create An Account" />

      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {
          signIn("google");
        }}
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
