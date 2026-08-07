import IconButton from "./IconButton";
import Logo from "@/assets/logos/logo.svg";
import Menu from "@/assets/icons/menu.svg";
import Search from "@/assets/icons/search.svg";
import Wishlist from "@/assets/icons/wishlist.svg";
import Cart from "@/assets/icons/cart.svg";
import IconLink from "./IconLink";
import SideMenu from "../SideMenu";
import SideSearch from "../SideSearch";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="flex w-full lg:hidden  p-3 md:p-4 md:hidden">
      <div className="flex items-center justify-start w-1/3 gap-2 sm:gap-4">
        <IconButton icon={Menu} comp={SideMenu} />
        <IconButton icon={Search} comp={SideSearch} />
      </div>
      <div className="w-1/3 h-auto flex justify-center">
        <Link className="w-15 flex h-auto" href="/">
          <Logo className="w-full" />
        </Link>
      </div>
      <div className="flex items-center justify-end w-1/3 gap-2 sm:gap-4">
        <IconLink icon={Wishlist} href="/wishlist" />
        <IconLink icon={Cart} href="/cart" />
      </div>
    </div>
  );
};

export default MobileNav;
