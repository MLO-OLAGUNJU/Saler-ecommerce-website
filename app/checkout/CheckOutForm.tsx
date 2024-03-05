"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../hook/useCart";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import formatPrice from "@/utils/formatPrice";
import toast from "react-hot-toast";

interface CheckOutFormProps {
  clientSecret: string;
  handlesetPaymentSuccess: (value: boolean) => void;
}
const CheckOutForm: React.FC<CheckOutFormProps> = ({
  clientSecret,
  handlesetPaymentSuccess,
}) => {
  const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
    useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const formattedPrice = formatPrice(cartTotalAmount);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    handlesetPaymentSuccess(false);
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          toast.success("Chekout Success");

          handleClearCart();
          handlesetPaymentSuccess(true);
          handleSetPaymentIntent(null);
        }
      });
  };

  return (
    <>
      <div>CheckOutForm</div>
    </>
  );
};

export default CheckOutForm;
