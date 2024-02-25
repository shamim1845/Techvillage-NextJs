import { addToCart } from "@/redux/slice/cartSlice";
import { ProductTypes } from "@/types";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const SingleProduct = ({ product }: { product: ProductTypes }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="border border-brand-primary/50 w-[160px] rounded-md space-y-2 cursor-pointer overflow-hidden"
      onClick={() => {
        dispatch(
          addToCart({
            item: product,
            quantity: 1,
          })
        );
      }}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className="w-full h-[160px]"
      />
      <div className="px-3 text-center">
        <span>$</span>
        <span>{product.price}</span>
      </div>
      <div className="border-t border-brand-primary/50 px-3 text-center">
        <h3>{product.title}</h3>
      </div>
    </div>
  );
};

export default SingleProduct;
