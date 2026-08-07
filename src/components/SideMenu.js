import Cross from "@/assets/icons/cross.svg";
import TextLogo from "@/assets/logos/text-logo.svg";
import { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import { NavbarDataLeft } from "@/constants/NavbarData";
import Link from "next/link";
const SideMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={` fixed inset-y-0 z-50 left-0 h-screen w-[80%] md:w-auto bg-white text-black p-8 flex gap-8 flex-col md:hidden  duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
    >
      <div className="flex justify-between">
        <TextLogo className="w-[75%] " />
        <button onClick={onClose}>
          <Cross className="w-5 h-5" />
        </button>
      </div>
      {NavbarDataLeft.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.title}
        </Link>
      ))}
      <SocialMedia />
    </div>
  );
};

export default SideMenu;
