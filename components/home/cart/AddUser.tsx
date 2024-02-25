"use client";
import { ChevronLeft, CircleUserRound, Plus, PlusCircle } from "lucide-react";
import React, { useState } from "react";
import Modal from "../shared/Modal";
import { fadeInVariants, sectionVariants } from "@/framer-motion/variants";
import { MotionDiv } from "@/framer-motion/motion";

const AddUser = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MotionDiv
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      animate="visible"
    >
      <div
        className="bg-brand-secondary/25 flex justify-between p-5 rounded-md cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="flex gap-3 text-brand-secondary">
          <CircleUserRound />
          <span>Steve Jobs</span>
        </div>
        <PlusCircle className="text-brand-secondary" />
      </div>

      <Modal showModal={showModal} closeModal={closeModal}>
        <MotionDiv
          variants={fadeInVariants}
          className="bg-white w-full max-w-[400px] p-12 rounded-md "
        >
          <div className="flex gap-16 mb-10">
            <ChevronLeft
              size={30}
              onClick={closeModal}
              className="cursor-pointer"
            />
            <h2 className="text-2xl text-black ">Add New Customer</h2>
          </div>

          <div>
            <form className="space-y-10 flex flex-col justify-between">
              <div className=" flex flex-col gap-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
                />

                <input
                  type="text"
                  placeholder="Currency"
                  className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
                />

                <input
                  type="text"
                  placeholder="TAX ID"
                  className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
                />
              </div>

              <div className="flex gap-5 text-brand-blue font-semibold cursor-pointer">
                <Plus size={20} />
                <span>Add More Details</span>
              </div>

              {/* action */}
              <button className="bg-brand-blue text-white px-5 py-4 rounded-md">
                Update
              </button>
            </form>
          </div>
        </MotionDiv>
      </Modal>
    </MotionDiv>
  );
};

export default AddUser;
