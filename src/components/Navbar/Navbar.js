import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = ({ isSticky = false }) => {
  return (
    <nav
      className={`text-2xs  ${isSticky && "bg-black/15 text-white fixed top-0"} shadow w-full`}
    >
      <MobileNav />
      <DesktopNav />
    </nav>
  );
};

export default Navbar;
