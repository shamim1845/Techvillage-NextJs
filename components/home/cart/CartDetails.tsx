import React from "react";
import HeaderNav from "./HeaderNav";
import AddUser from "./AddUser";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import CartAction from "./CartAction";
import { MotionDiv } from "@/framer-motion/motion";
import { sectionVariants } from "@/framer-motion/variants";

const CartDetails = () => {
  return (
    <MotionDiv
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      animate="visible"
      className="flex-1 space-y-5 px-5"
    >
      <HeaderNav />
      <AddUser />
      <CartList />
      <CartSummary />
      <CartAction />
    </MotionDiv>
  );
};

export default CartDetails;
