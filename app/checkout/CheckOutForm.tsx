"use client";
import React from "react";

interface CheckOutFormProps {
  clientSecret: string;
  handlesetPaymentSuccess: (value: boolean) => void;
}
const CheckOutForm: React.FC<CheckOutFormProps> = ({
  clientSecret,
  handlesetPaymentSuccess,
}) => {
  return (
    <>
      <div>CheckOutForm</div>
    </>
  );
};

export default CheckOutForm;
