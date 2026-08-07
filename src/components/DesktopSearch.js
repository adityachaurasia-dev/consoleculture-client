"use client";
import Search from "@/assets/icons/search.svg";
import { useState } from "react";
import SideSearch from "./SideSearch";

const DesktopSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border w-70 mx-5 justify-between px-3 items-center py-1 cursor-pointer lg:flex hidden"
      >
        <p className="opacity-90 tracking-wider text-2xs">Search...</p>
        <Search className="w-8 h-8" />
      </button>

      <SideSearch isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default DesktopSearch;
