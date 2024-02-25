"use client";
import useCalculateCartSummary from "@/customHooks/useCalculateCartSummary";
import { MotionDiv } from "@/framer-motion/motion";
import { sectionVariants } from "@/framer-motion/variants";
import React from "react";

const CartSummary = () => {
  const { subTotal, tax, shippingCost, discount, total, productsCount } =
    useCalculateCartSummary();

  return (
    <MotionDiv
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      animate="visible"
      className="pt-5"
    >
      <div className="max-w-max j ml-auto space-y-2">
        <div className="flex gap-32 justify-between border-t pt-2">
          <span>Sub Total</span>
          <div className="text-black font-[500]">
            <span>$</span>
            <span>{subTotal}</span>
          </div>
        </div>

        <div className="flex gap-32 justify-between border-t pt-2">
          <span>Tax</span>
          <div className="text-black font-[500]">
            <span>$</span>
            <span>{tax}</span>
          </div>
        </div>

        <div className="flex gap-32 justify-between border-t pt-2">
          <span>Shipping</span>
          <div className="text-black font-[500]">
            <span>$</span>
            <span>{shippingCost}</span>
          </div>
        </div>

        <div className="flex gap-32 justify-between border-t pt-2">
          <span className="text-brand-blue">Discount on Cart</span>
          <div className="text-black font-[500]">
            <span>$</span>
            <span>{discount}</span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="bg-brand-secondary/25 flex justify-between p-5 rounded-md cursor-pointer">
          <div className="flex-1 flex gap-3 justify-between items-center text-brand-secondary">
            <span className="text-sm">Products Count ({productsCount})</span>
            <span className="text-xl">Total</span>
            <div className="font-bold">
              <span>$</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default CartSummary;
