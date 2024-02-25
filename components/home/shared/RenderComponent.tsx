"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import PaymentDetails from "../payment/PaymentDetails";
import ProductDetails from "../product/ProductDetails";

const RenderComponent = () => {
  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  return <>{action === "payment" ? <PaymentDetails /> : <ProductDetails />}</>;
};

export default RenderComponent;
