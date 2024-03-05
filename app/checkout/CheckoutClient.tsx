"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCart } from "../hook/useCart";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { dividerClasses } from "@mui/material";
import Button from "../components/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSucess, setPaymentSuccess] = useState(false);

  const router = useRouter();

  console.log("paymentIntent", paymentIntent);
  console.log("clientSecret", clientSecret);

  useEffect(() => {
    if (cartProducts) {
      setLoading(true);
      setError(false);

      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts,
          payment_intent_id: paymentIntent,
        }),
      })
        .then((res) => {
          setLoading(false);
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
          console.log("Error", error);
          toast.error("something went wrong");
        });
    }
  }, [cartProducts, paymentIntent]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  const handlesetPaymentSuccess = useCallback((value: boolean) => {
    setPaymentSuccess(value);
  }, []);
  return (
    <>
      <div className=" w-full">
        {clientSecret && cartProducts && (
          <Elements options={options} stripe={stripePromise}>
            <CheckOutForm
              clientSecret={clientSecret}
              handlesetPaymentSuccess={handlesetPaymentSuccess}
            />
          </Elements>
        )}
        {loading && <div className="text-center">Loading Checkout....</div>}
        {error && (
          <div className="text-center text-rose-500">Something went wrong</div>
        )}
        {paymentSucess && (
          <div className="flex items-center flex-col gap-4">
            <div className="text-teal-500">Payment Success</div>
            <div className="max-w-[220px] w-full">
              <Button
                label="View Your Orders"
                onClick={() => router.push("/order")}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutClient;
