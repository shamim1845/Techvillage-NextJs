import useCalculateCartSummary from "@/customHooks/useCalculateCartSummary";
import React, { useState } from "react";
import { Banknote, CreditCard, Receipt, User } from "lucide-react";
import Card from "./Card";
import { cn } from "@/lib/utils";
import OnAccount from "./OnAccount";
import Checque from "./Checque";
import Cash from "./Cash";
import { MotionDiv } from "@/framer-motion/motion";
import { sectionVariants } from "@/framer-motion/variants";

const PaymentDetails = () => {
  const [component, setComponent] = useState("Card");

  const { total } = useCalculateCartSummary();

  return (
    <MotionDiv
      variants={sectionVariants({ from: "right" })}
      initial="hidden"
      animate="visible"
      className="flex-1 bg-[#F4F6F8] p-5 border-l border-b-1 border-brand-primary/50 space-y-5"
    >
      <div className="flex justify-between p-5 rounded-md border border-brand-primary/50">
        <div className="flex-1 flex gap-3 justify-between items-center ">
          <span className="">Order Amount</span>
          <div className="font-bold text-2xl text-black">
            <span>$</span>
            <span>{total}</span>
          </div>
        </div>
      </div>

      <div className="min-h-[500px] border border-brand-primary/50 rounded-md flex flex-col md:flex-row">
        {/* side menu */}
        <div className="">
          <MenuItem
            icon={<Banknote size={20} />}
            text="Cash"
            setComponent={setComponent}
            component={component}
          />
          <MenuItem
            icon={<CreditCard size={20} />}
            text="Card"
            setComponent={setComponent}
            component={component}
          />
          <MenuItem
            icon={<User size={20} />}
            text="On Account"
            setComponent={setComponent}
            component={component}
          />
          <MenuItem
            icon={<Receipt size={20} />}
            text="Checque"
            setComponent={setComponent}
            component={component}
          />
        </div>
        {/* component */}
        <div className=" flex-1 border-t md:border-l md:border-t-0 border-brand-primary/50 p-10">
          {(() => {
            switch (component) {
              case "Cash":
                return <Cash />;

              case "Card":
                return <Card />;

              case "On Account":
                return <OnAccount />;

              case "Checque":
                return <Checque />;

              default:
                return null;
            }
          })()}
        </div>
      </div>
    </MotionDiv>
  );
};

export default PaymentDetails;

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  component: string;
  setComponent: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItem = ({ icon, text, component, setComponent }: MenuItemProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 items-center px-5 py-3 hover:bg-brand-secondary/20 hover:text-brand-secondary transition-all cursor-pointer",
        component === text && "text-brand-secondary bg-brand-secondary/20"
      )}
      onClick={() => setComponent(text)}
    >
      <div>{icon}</div>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};
