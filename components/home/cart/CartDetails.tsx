import React from "react";
import HeaderNav from "./HeaderNav";
import AddUser from "./AddUser";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import CartAction from "./CartAction";

const CartDetails = () => {
  return (
    <div className="flex-1 space-y-5 px-5">
      <HeaderNav />
      <AddUser />
      <CartList />
      <CartSummary />
      <CartAction />
    </div>
  );
};

export default CartDetails;
