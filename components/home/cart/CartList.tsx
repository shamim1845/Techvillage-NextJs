"use client";
import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/slice/cartSlice";

const CartList = () => {
  const cartItems = useSelector(selectCartItems);

  if (!cartItems.length) {
    return (
      <div className="py-5">
        <h3 className="text-center text-2xl text-brand-crimson">
          Your cart is empty!
        </h3>
      </div>
    );
  }

  return (
    <ul className="flex-1 my-10">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.item.id} cartItem={cartItem} />
      ))}
    </ul>
  );
};

export default CartList;
