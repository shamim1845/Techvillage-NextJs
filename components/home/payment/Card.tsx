"use client";
import React from "react";
import { ButtonWithIcon } from "../shared/CustomBtn";
import { HandCoins, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Card = () => {
  const router = useRouter();

  return (
    <div className="h-full space-y-10 flex flex-col  justify-between">
      <div className=" flex flex-col gap-8">
        <input
          type="text"
          placeholder="Card Number"
          className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
        />
        <input
          type="text"
          placeholder="Card Expire Date"
          className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
        />

        <input
          type="text"
          placeholder="Card Secreet"
          className="bg-inherit border-b border-brand-primary/50 outline-none text-black/80"
        />
      </div>

      {/* action */}
      <div className="flex flex-wrap gap-5">
        <ButtonWithIcon
          icon={<XCircle />}
          text="Cancel"
          className="text-brand-crimson bg-brand-crimson/25 font-semibold"
          onClick={() => {
            router.push("/");
          }}
        />

        <ButtonWithIcon
          icon={<HandCoins />}
          text="Complete Payment"
          className="font-semibold"
        />
      </div>
    </div>
  );
};

export default Card;
