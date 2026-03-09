"use client";

import { CartProvider } from "@/context/CartContext";
import { ReactNode } from "react";
import React from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return React.createElement(CartProvider, null, children);
}
