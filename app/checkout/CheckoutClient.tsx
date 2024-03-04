"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "../hook/useCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!cartProducts) return; // Exit early if cartProducts is null or undefined

    setIsLoading(true);
    setError(false);

    fetch("api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartProducts,
        payment_intent_id: paymentIntent, // Pass paymentIntent here
      }),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.status === 401) {
          return router.push("/login");
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.paymentIntent?.client_secret);
        handleSetPaymentIntent(data.paymentIntent?.id);
      })
      .catch((error) => {
        setError(true);
        console.error("Error:", error);
        toast.error("Something went wrong");
      });
  }, [cartProducts, paymentIntent]); // Include paymentIntent in the dependency array

  return (
    <>
      <div>
        <p>Checkout</p>
      </div>
    </>
  );
};

export default CheckoutClient;
