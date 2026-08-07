import { useState } from "react";

const IconButton = ({ icon: Icon, className = "", comp: Comp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`cursor-pointer ${className}`}
      >
        <Icon className="w-8 h-8" />
      </button>

      {Comp && <Comp isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default IconButton;
