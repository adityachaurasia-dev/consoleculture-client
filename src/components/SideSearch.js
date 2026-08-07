import Cross from "@/assets/icons/cross.svg";
import TextLogo from "@/assets/logos/text-logo.svg";
import { useEffect } from "react";
const SideSearch = ({ isOpen, onClose }) => {
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
      className={`fixed inset-y-0 left-0 z-50 h-screen w-[80%] md:w-auto bg-white text-black p-8 flex flex-col gap-8 duration-300 transition-all ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <TextLogo className="w-[75%] " />
        <button onClick={onClose}>
          <Cross className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-between">
        <span>Men's Edition</span>
        <span>Lady's Edition</span>
      </div>
      <div></div>
    </div>
  );
};

export default SideSearch;
