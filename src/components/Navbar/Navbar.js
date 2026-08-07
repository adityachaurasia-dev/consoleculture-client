import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = ({ isSticky = false }) => {
  return (
    <nav
      className={`text-2xs  ${isSticky ? "bg-black/15 text-white fixed " : "sticky  bg-white text-black"} shadow w-full  top-0 z-50 backdrop-blur-[1px]`}
    >
      <MobileNav />
      <DesktopNav />
    </nav>
  );
};

export default Navbar;
