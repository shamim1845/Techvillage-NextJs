import React from "react";
import ProductSearchBar from "./ProductSearchBar";
import ProductCategories from "./ProductCategories";
import ProductList from "./ProductList";
import products from "@/data/products.json";

const categoriesSet = new Set(products.map((product) => product.category));

const ProductDetails = () => {
  return (
    <div className="flex-1 bg-[#F4F6F8] border-l border-b-1 border-brand-primary/50">
      <ProductSearchBar />
      <div className="px-5">
        <ProductCategories categories={Array.from(categoriesSet)} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductDetails;
