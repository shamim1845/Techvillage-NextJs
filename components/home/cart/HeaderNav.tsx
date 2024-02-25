"use client";
import {
  AlignJustify,
  Ambulance,
  NotebookPen,
  PlusCircle,
  TimerOff,
} from "lucide-react";
import React, { useState } from "react";
import { ButtonWithIcon } from "../shared/CustomBtn";
import LeftSideMenu from "../shared/LeftSideMenu";
import { MotionButton, MotionDiv } from "@/framer-motion/motion";
import { containerVariants, fadeInVariants } from "@/framer-motion/variants";

const HeaderNav = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 flex justify-between items-center gap-5 pt-3"
    >
      <LeftSideMenu showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      <MotionButton
        variants={fadeInVariants}
        onClick={() => setShowSideNav(true)}
      >
        <AlignJustify size={30} />
      </MotionButton>

      <div className="flex flex-wrap gap-5">
        <MotionDiv variants={fadeInVariants}>
          <ButtonWithIcon icon={<NotebookPen size={24} />} text="Note" />
        </MotionDiv>
        <MotionDiv variants={fadeInVariants}>
          <ButtonWithIcon icon={<Ambulance size={24} />} text="Shipping" />
        </MotionDiv>
        <MotionDiv variants={fadeInVariants}>
          <ButtonWithIcon icon={<TimerOff size={24} />} text="Hold Orders" />
        </MotionDiv>
        <MotionDiv variants={fadeInVariants}>
          <ButtonWithIcon
            icon={
              <PlusCircle
                size={24}
                className="fill-brand-secondary text-white"
              />
            }
            text="New Item"
          />
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default HeaderNav;
