"use client";

import React from "react";
import { ButtonWithIcon } from "../shared/CustomBtn";
import { Grab, HandCoins, PercentCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { MotionDiv } from "@/framer-motion/motion";
import { containerVariants, fadeInVariants } from "@/framer-motion/variants";

const CartAction = () => {
  const router = useRouter();

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-5"
    >
      <MotionDiv variants={fadeInVariants}>
        <ButtonWithIcon
          icon={<XCircle />}
          text="Cancel"
          className="text-brand-crimson bg-brand-crimson/25 font-semibold"
          onClick={() => {
            router.push("/");
          }}
        />
      </MotionDiv>
      <MotionDiv variants={fadeInVariants}>
        <ButtonWithIcon icon={<Grab />} text="Hold" className="font-semibold" />
      </MotionDiv>
      <MotionDiv variants={fadeInVariants}>
        <ButtonWithIcon
          icon={<PercentCircle />}
          text="Discount"
          className="font-semibold"
        />
      </MotionDiv>
      <MotionDiv variants={fadeInVariants}>
        <ButtonWithIcon
          icon={<HandCoins />}
          text="Pay Now"
          className="font-semibold"
          onClick={() => {
            router.push("/?action=payment");
          }}
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default CartAction;
