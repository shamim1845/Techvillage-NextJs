"use client";
import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/slice/cartSlice";
import { MotionDiv } from "@/framer-motion/motion";
import { sectionVariants } from "@/framer-motion/variants";

const CartList = () => {
  const cartItems = useSelector(selectCartItems);

  if (!cartItems.length) {
    return (
      <MotionDiv
        variants={sectionVariants({ from: "top" })}
        initial="hidden"
        animate="visible"
        className="py-5"
      >
        <h3 className="text-center text-2xl text-brand-crimson">
          Your cart is empty!
        </h3>
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      variants={sectionVariants({ from: "top" })}
      initial="hidden"
      animate="visible"
    >
      <ul className="flex-1 my-10">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.item.id} cartItem={cartItem} />
        ))}
      </ul>
    </MotionDiv>
  );
};

export default CartList;
