"use client";
import React from "react";
import SingleProduct from "./SingleProduct";
import { ProductTypes } from "@/types";
import { useSelector } from "react-redux";
import {
  selectActiveCategories,
  selectSearchKeyword,
} from "@/redux/slice/searchFilterSlice";

const ProductList = ({ products }: { products: ProductTypes[] }) => {
  const activeCategory = useSelector(selectActiveCategories);
  const searchKeyword = useSelector(selectSearchKeyword);

  const filteredProducts = products
    .filter((product) =>
      searchKeyword
        ? product.title
            .toLocaleLowerCase()
            .includes(searchKeyword.toLocaleLowerCase())
        : true
    )
    .filter((product) =>
      activeCategory === "All Categories"
        ? true
        : product.category === activeCategory
    );

  if (!filteredProducts.length) {
    return (
      <div className="py-5">
        <h3 className="text-center text-xl text-brand-secondary">
          Opps! No product found.
        </h3>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-5 mb-10">
      {filteredProducts.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
