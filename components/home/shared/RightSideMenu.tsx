"use client";
import { Banknote, LayoutDashboard, MapPin, Settings, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addActiveCategory,
  selectActiveCategories,
} from "@/redux/slice/searchFilterSlice";
import { MotionDiv } from "@/framer-motion/motion";
import { rightSideVariants } from "@/framer-motion/variants";

interface RightSideMenuProps {
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
  categories: string[];
}

const RightSideMenu = ({
  showSideNav,
  setShowSideNav,
  categories,
}: RightSideMenuProps) => {
  const activeCategory = useSelector(selectActiveCategories);

  const dispatch = useDispatch();

  return (
    <MotionDiv
      variants={rightSideVariants(showSideNav)}
      animate="visible"
      className={cn("fixed top-0 left-0 right-0 bottom-0 flex z-50")}
    >
      <div
        className="flex-1 flex justify-end bg-black/30"
        onClick={() => setShowSideNav(false)}
      >
        <X className="m-3 cursor-pointer" color="#fff" size={30} />
      </div>

      <div className="flex-1 bg-white relative px-10 py-5 space-y-8">
        <h2 className="text-2xl text-center text-black/80">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <button
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
          </button>

          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "border-2 border-brand-primary/50 rounded-md px-3 py-1 transition-all",
                activeCategory === category &&
                  "border-brand-blue text-brand-blue"
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
            </button>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default RightSideMenu;

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const MenuItem = ({ icon, text, link }: MenuItemProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex gap-3 items-center px-5 py-3 hover:bg-brand-secondary/20 hover:text-brand-secondary transition-all cursor-pointer",
        pathname === link && "text-brand-secondary bg-brand-secondary/20"
      )}
    >
      <div>{icon}</div>
      <div>
        <Link href={link}>{text}</Link>
      </div>
    </div>
  );
};
