"use client";
import { Banknote, LayoutDashboard, MapPin, Settings, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/framer-motion/motion";
import { leftSideVariants } from "@/framer-motion/variants";
import dynamic from "next/dynamic";

interface LeftSideMenuProps {
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoSSRLeftSideMenu = ({
  showSideNav,
  setShowSideNav,
}: LeftSideMenuProps) => {
  return (
    <MotionDiv
      variants={leftSideVariants}
      initial={false}
      animate={showSideNav ? "open" : "closed"}
      custom={window.innerHeight}
      className={cn("fixed top-0 left-0 right-0 bottom-0 flex")}
    >
      <div className="w-full max-w-[300px] bg-white relative">
        <div className="bg-[#EFEFEF] px-5">
          <Image src={Logo} alt="logo" />

          <div className="py-5">
            <span className="text-sm">Location:</span>
            <h4 className="text-gray-600">Los Angles, California</h4>
          </div>
        </div>
        <div className="">
          <MenuItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            link="#"
          />
          <MenuItem icon={<MapPin size={20} />} text="Locations" link="#" />
          <MenuItem
            icon={<Banknote size={20} />}
            text="POS Invoices"
            link="/"
          />
          <MenuItem icon={<Settings size={20} />} text="Settings" link="#" />
        </div>

        <div className="flex justify-center absolute bottom-5 left-0 right-0">
          <button className="w-full mx-5 border border-brand-primary px-5 py-2 rounded-md hover:bg-brand-blue hover:text-white transition-all">
            Logout
          </button>
        </div>
      </div>
      <div className="flex-1 bg-black/30" onClick={() => setShowSideNav(false)}>
        <X className="m-3 cursor-pointer" color="#fff" size={30} />
      </div>
    </MotionDiv>
  );
};

const LeftSideMenu = dynamic(() => Promise.resolve(NoSSRLeftSideMenu), {
  ssr: false,
});

export default LeftSideMenu;

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const MenuItem = ({ icon, text, link }: MenuItemProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex gap-3 items-center px-5 py-3 hover:bg-brand-secondary/20 hover:text-brand-secondary transition-all cursor-pointer",
        pathname === link && "text-brand-secondary bg-brand-secondary/20"
      )}
    >
      <div>{icon}</div>
      <div>
        <Link href={link}>{text}</Link>
      </div>
    </div>
  );
};
