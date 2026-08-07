import TextLogo from "@/assets/logos/text-logo.svg";
import Search from "@/assets/icons/search.svg";
import Wishlist from "@/assets/icons/wishlist.svg";
import Cart from "@/assets/icons/cart.svg";
import User from "@/assets/icons/user.svg";
import IconLink from "./IconLink";
import IconButton from "./IconButton";
import Link from "next/link";
import { NavbarDataLeft } from "@/constants/NavbarData";
import SideSearch from "../SideSearch";
import DesktopSearch from "../DesktopSearch";

const DesktopNav = () => {
  return (
    <div className="px-8 py-4 md:flex hidden">
      <ul className="p-4 md:flex gap-4 w-2/5 justify-start">
        {NavbarDataLeft.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link className="w-1/5 flex h-auto" href="/">
        <TextLogo className="w-full" />
      </Link>
      <div className="flex items-center justify-end w-2/5 gap-5">
        <DesktopSearch/>
        <IconButton icon={Search} className="lg:hidden" comp={SideSearch} />
        <IconLink icon={Wishlist} href="/wishlist" />
        <div className="relative">
          <IconLink icon={Cart} href="/cart" />
          <span className="absolute -top-0.5 -right-1.5 text-3xs font-bold bg-white rounded-full w-4.5 h-4.5 p-1 flex items-center justify-center text-black leading-0 ">
            0
          </span>
        </div>
        <IconLink icon={User} href="/user" />
      </div>
    </div>
  );
};

export default DesktopNav;
