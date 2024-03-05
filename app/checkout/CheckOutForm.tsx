"use client";
import React, { useState } from "react";
import { useCart } from "../hook/useCart";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import formatPrice from "@/utils/formatPrice";

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
  return (
    <>
      <div>CheckOutForm</div>
    </>
  );
};

export default CheckOutForm;
