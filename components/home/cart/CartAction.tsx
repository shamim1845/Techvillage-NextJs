import React from "react";
import { ButtonWithIcon } from "../shared/CustomBtn";
import { Grab, HandCoins, PercentCircle, XCircle } from "lucide-react";

const CartAction = () => {
  return (
    <div className="flex gap-5">
      <ButtonWithIcon
        icon={<XCircle />}
        text="Note"
        className="text-brand-crimson bg-brand-crimson/25 font-semibold"
      />
      <ButtonWithIcon
        icon={<Grab />}
        text="Shipping"
        className="font-semibold"
      />
      <ButtonWithIcon
        icon={<PercentCircle />}
        text="Hold Orders"
        className="font-semibold"
      />
      <ButtonWithIcon
        icon={<HandCoins />}
        text="New Item"
        className="font-semibold"
      />
    </div>
  );
};

export default CartAction;
