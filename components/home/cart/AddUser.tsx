import { CircleUserRound, PlusCircle } from "lucide-react";
import React from "react";

const AddUser = () => {
  return (
    <div className="bg-brand-secondary/25 flex justify-between p-5 rounded-md cursor-pointer">
      <div className="flex gap-3 text-brand-secondary">
        <CircleUserRound />
        <span>Steve Jobs</span>
      </div>
      <PlusCircle className="text-brand-secondary" />
    </div>
  );
};

export default AddUser;
