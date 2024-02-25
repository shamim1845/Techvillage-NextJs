"use client";
import { MotionDiv } from "@/framer-motion/motion";
import { sectionVariants } from "@/framer-motion/variants";
import {
  addSearchKeyword,
  selectSearchKeyword,
} from "@/redux/slice/searchFilterSlice";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

const ProductSearchBar = () => {
  const searchKeyword = useSelector(selectSearchKeyword);

  const [keyword, setKeyWord] = useState(searchKeyword);

  const dispatch = useDispatch();

  const [debouncedKeyword] = useDebounce(keyword, 500);

  useEffect(() => {
    dispatch(addSearchKeyword({ keyword: debouncedKeyword }));
  }, [debouncedKeyword, dispatch]);

  return (
    <MotionDiv
      variants={sectionVariants({ from: "top" })}
      initial="hidden"
      animate="visible"
      className="shadow-md py-2"
    >
      <div className="flex items-center px-5 ">
        <Search size={24} />
        <input
          type="search"
          placeholder="Search Products..."
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
          className="font-normal p-3 bg-inherit border-none outline-none w-full text-black/90"
        />
      </div>
    </MotionDiv>
  );
};

export default ProductSearchBar;
