"use client";
import { useState } from "react";
import Horizontal from "@/assets/icons/horizontal.svg";
import Vertical from "@/assets/icons/vertical.svg";

const ListDroper = ({ title, lists, isFooter = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`flex justify-between items-center ${isFooter && "md:justify-center"}`}
      >
        <span className="text-2xs">{title}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-6 w-6 items-center justify-center ${isFooter && "md:hidden"}`}
        >
          <div className="relative h-4 w-4">
            {/* Horizontal line */}
            <div className="relative h-4 w-4">
              <Horizontal className="absolute inset-0 w-4 h-4" />
              <Vertical
                className={`absolute inset-0 w-4 h-4 transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
            </div>
          </div>
        </button>
      </div>
      <ul
        className={`text-3xs flex flex-col gap-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "h-auto opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"} ${isFooter && " md:max-h-none md:opacity-100 md:mt-5 md:overflow-visible md:items-center"}`}
      >
        {lists.map((item, index) => (
          <li key={index} className="text-justify leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDroper;
