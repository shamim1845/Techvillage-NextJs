import { cn } from "@/lib/utils";
import React from "react";

export const ButtonWithIcon = ({
  className,
  text,
  icon,
  ...props
}: React.JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: any;
    text: string;
  }) => {
  return (
    <button
      className={cn(
        "flex gap-3 bg-brand-secondary/25 py-3 px-4 rounded-md text-brand-secondary ",
        className
      )}
      {...props}
    >
      {icon} <span>{text}</span>
    </button>
  );
};
