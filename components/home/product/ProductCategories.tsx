"use client";
import { cn } from "@/lib/utils";
import {
  addActiveCategory,
  selectActiveCategories,
} from "@/redux/slice/searchFilterSlice";
import { MoreVertical } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import RightSideMenu from "../shared/RightSideMenu";
import { useState } from "react";
import { MotionButton, MotionDiv } from "@/framer-motion/motion";
import { containerVariants, fadeInVariants } from "@/framer-motion/variants";

const ProductCategories = ({ categories }: { categories: string[] }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const activeCategory = useSelector(selectActiveCategories);

  const dispatch = useDispatch();

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="my-5 flex justify-between items-center"
    >
      <div className="flex flex-wrap gap-2">
        <MotionButton
          variants={fadeInVariants}
          className={cn(
            "border-2 border-brand-primary/50 rounded-md px-3 py-1 transition-all",
            activeCategory === "All Categories" &&
              "border-brand-blue text-brand-blue"
          )}
          onClick={() => {
            dispatch(
              addActiveCategory({
                category: "All Categories",
              })
            );
          }}
        >
          All Categories
        </MotionButton>

        {categories.map((category) => (
          <MotionButton
            variants={fadeInVariants}
            key={category}
            className={cn(
              "border-2 border-brand-primary/50 rounded-md px-3 py-1 transition-all",
              activeCategory === category && "border-brand-blue text-brand-blue"
            )}
            onClick={() => {
              dispatch(
                addActiveCategory({
                  category,
                })
              );
            }}
          >
            {category}
          </MotionButton>
        ))}
      </div>

      <MotionDiv variants={fadeInVariants}>
        <MoreVertical
          onClick={() => {
            setShowSideNav(true);
          }}
          className="cursor-pointer"
        />
        <RightSideMenu
          showSideNav={showSideNav}
          setShowSideNav={setShowSideNav}
          categories={categories}
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default ProductCategories;
