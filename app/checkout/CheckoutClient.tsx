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

  console.log("paymentIntent:", paymentIntent);
  console.log("clientSecret:", clientSecret);

  useEffect(() => {
    //create a payment intent as soon as the page is loaded
    if (cartProducts) {
      setIsLoading(true);
      setError(false);

      fetch("api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartProducts,
          payment_intent_id: paymentIntent,
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
          setClientSecret(data.paymentIntent.client_secret);
          handleSetPaymentIntent(data.paymentIntent.id);
        })
        .catch((error) => {
          setError(true);
          console.log("Error:", error);
          toast.error("Something went wrong");
        });
    }
  }, [cartProducts, paymentIntent]);

  return <div></div>;
};

export default CheckoutClient;
