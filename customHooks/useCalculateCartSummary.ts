import { selectCartItems } from "@/redux/slice/cartSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const taxRate = 5;
const shippingRate = 10;
const discountRate = 5;

const useCalculateCartSummary = () => {
  const [subTotal, setSubTotal] = useState(0);

  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    if (cartItems.length) {
      const calcSubTotal = cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.item.price * cartItem.quantity;
      }, 0);

      setSubTotal(calcSubTotal);
    } else {
      setSubTotal(0);
    }
  }, [cartItems]);

  const tax = Number((subTotal * (taxRate / 100)).toFixed(2));
  const shippingCost = Number((subTotal * (shippingRate / 100)).toFixed(2));
  const discount = Number((subTotal * (discountRate / 100)).toFixed(2));
  const total = Number((subTotal + tax + shippingCost + discount).toFixed(2));

  return {
    subTotal,
    tax,
    shippingCost,
    discount,
    total,
    productsCount: cartItems.length,
  };
};

export default useCalculateCartSummary;
