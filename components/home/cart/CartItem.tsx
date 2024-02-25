import { addToCart, removeFromCart } from "@/redux/slice/cartSlice";
import { CartItem } from "@/types";
import { FilePenLine, MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }: { cartItem: CartItem }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex-1 flex gap-2 items-center group">
      <div>
        <FilePenLine />
      </div>

      <div className="flex-1 flex justify-between gap-5 p-3 border-t border-l border-r border-brand-primary/50  group-last:border-b-[1px] group-first:rounded-t-sm group-last:rounded-b-sm">
        <h5 className="min-w-[150px]">{cartItem.item.title}</h5>

        <div className="">
          <span>$</span>
          <span>{cartItem.item.price}</span>
        </div>

        <div className="flex gap-3">
          <MinusCircle
            className="fill-brand-primary text-white cursor-pointer"
            onClick={() => {
              if (cartItem.quantity > 1) {
                dispatch(
                  addToCart({
                    item: cartItem.item,
                    quantity: cartItem.quantity - 1,
                  })
                );
              }
            }}
          />

          <span className="select-none">{cartItem.quantity}</span>

          <PlusCircle
            className="fill-brand-primary text-white cursor-pointer"
            onClick={() => {
              dispatch(
                addToCart({
                  item: cartItem.item,
                  quantity: cartItem.quantity + 1,
                })
              );
            }}
          />
        </div>

        <div className="">
          <span>$</span>
          <span>{cartItem.item.price * cartItem.quantity}</span>
        </div>
      </div>

      <div>
        <Trash2
          className="text-brand-crimson cursor-pointer"
          onClick={() => {
            dispatch(
              removeFromCart({
                id: cartItem.item.id,
              })
            );
          }}
        />
      </div>
    </li>
  );
};

export default CartItem;
