import React from "react";
import ProductSearchBar from "./ProductSearchBar";
import ProductCategories from "./ProductCategories";
import ProductList from "./ProductList";
import products from "@/data/products.json";
import { MotionDiv } from "@/framer-motion/motion";
import { sectionVariants } from "@/framer-motion/variants";

const categoriesSet = new Set(products.map((product) => product.category));

const ProductDetails = () => {
  return (
    <MotionDiv
      variants={sectionVariants({ from: "right" })}
      initial="hidden"
      animate="visible"
      className="flex-1 bg-[#F4F6F8] border-l border-b-1 border-brand-primary/50"
    >
      <ProductSearchBar />
      <div className="px-5">
        <ProductCategories categories={Array.from(categoriesSet)} />
        <ProductList products={products} />
      </div>
    </MotionDiv>
  );
};

export default ProductDetails;
