"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../hook/useCart";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import formatPrice from "@/utils/formatPrice";
import toast from "react-hot-toast";
import Heading from "../components/Heading";

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

        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="payment-form">
        <div className="mb-6 ">
          <Heading title="Enter your details to complete checkout" />
        </div>
        <h2 className=" font-semibold mb-2">Address Information</h2>
        <AddressElement
          options={{
            mode: "shipping",
          }}
        />
        <h2 className=" font-semibold mt-4 mb-2">Payment Information</h2>

        <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
        <div className="py-4 text-center text-slate-700 text-4xl font-bold">
          Total: {formattedPrice}
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
