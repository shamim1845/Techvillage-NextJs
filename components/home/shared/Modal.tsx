import { MotionDiv } from "@/framer-motion/motion";
import { modalVariants } from "@/framer-motion/variants";
import React from "react";

const Modal = ({
  children,
  showModal,
  closeModal,
}: {
  children: React.ReactNode;
  showModal: boolean;
  closeModal: () => void;
}) => {
  if (!showModal) return null;

  return (
    <MotionDiv
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/30"
    >
      <div onClick={closeModal} className="w-full h-full relative"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        {children}
      </div>
    </MotionDiv>
  );
};

export default Modal;
