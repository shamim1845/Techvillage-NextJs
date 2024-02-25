import {
  AlignJustify,
  Ambulance,
  NotebookPen,
  PlusCircle,
  TimerOff,
} from "lucide-react";
import React from "react";
import { ButtonWithIcon } from "../shared/CustomBtn";

const HeaderNav = () => {
  return (
    <div className="flex-1 flex justify-between items-center gap-5 pt-3">
      <button>
        <AlignJustify />
      </button>

      <div className="flex gap-5">
        <ButtonWithIcon icon={<NotebookPen size={24} />} text="Note" />
        <ButtonWithIcon icon={<Ambulance size={24} />} text="Shipping" />
        <ButtonWithIcon icon={<TimerOff size={24} />} text="Hold Orders" />
        <ButtonWithIcon
          icon={
            <PlusCircle size={24} className="fill-brand-secondary text-white" />
          }
          text="New Item"
        />
      </div>
    </div>
  );
};

export default HeaderNav;
