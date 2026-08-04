import TextLogo from "@/assets/logos/text-logo.svg";
import Search from "@/assets/icons/search.svg";
import Wishlist from "@/assets/icons/wishlist.svg";
import Cart from "@/assets/icons/cart.svg";
import User from "@/assets/icons/user.svg";
import IconLink from "./IconLink";
import IconButton from "./IconButton";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="px-8 py-4 md:flex hidden">
      <ul className="p-4 md:flex gap-4 w-2/5 justify-start">
        {["MEN'S EDITION", "LADY'S EDITION", "ACCEESSORIES"].map(
          (item, index) => (
            <li key={index}>
              <Link href={`/jsl`}>{item}</Link>
            </li>
          ),
        )}
      </ul>
      <TextLogo className="w-1/5" />
      <div className="flex items-center justify-end w-2/5 gap-5">
        <div className="border w-70 mx-5 justify-between px-3 items-center py-1 cursor-pointer lg:flex hidden">
          <p className="opacity-90 tracking-wider text-2xs">Search...</p>
          <Search className="w-8 h-8" />
        </div>
        <IconButton icon={Search} className="lg:hidden" />
        <IconLink icon={Wishlist} href="/wishlist" />
        <IconLink icon={Cart} href="/cart" />
        <IconLink icon={User} href="/user" />
      </div>
    </div>
  );
};

export default DesktopNav;
