"use client";
import { cn } from "@/lib/utils";
import {
  addActiveCategory,
  selectActiveCategories,
} from "@/redux/slice/searchFilterSlice";
import { MoreVertical } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const ProductCategories = ({ categories }: { categories: string[] }) => {
  const activeCategory = useSelector(selectActiveCategories);

  const dispatch = useDispatch();

  return (
    <div className="my-5 flex justify-between items-center">
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
          </button>
        ))}
      </div>

      <div>
        <MoreVertical />
      </div>
    </div>
  );
};

export default ProductCategories;
