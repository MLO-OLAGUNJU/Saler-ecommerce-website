"use client";

import { CartContextProvider } from "@/app/hook/useCart";
import React from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return <CartContextProvider> {children}</CartContextProvider>;
};

export default CartProvider;
