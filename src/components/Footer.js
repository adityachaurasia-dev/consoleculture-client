import TextLogo from "@/assets/logos/text-logo.svg";
import Instagram from "@/assets/icons/instagram.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Pinterest from "@/assets/icons/pinterest.svg";
import Youtube from "@/assets/icons/youtube.svg";
import X from "@/assets/icons/x.svg";
import ListDroper from "./ListDroper";
import Link from "next/link";

const Footer = () => {
  const footerData = [
    {
      title: "COLLECTIONS",
      lists: [
        "Tshirt",
        "Oversize Tshirt",
        "Hoodie",
        "Jeans",
        "Oversize Shirt",
        "Shirt",
        "Cargo Pants",
        "Jackets",
        "Sweatshirts",
        "Co-ord Sets",
      ],
    },
    {
      title: "SUPPORT",
      lists: ["Contact Us", "FAQs", "Shipping", "Returns"],
    },
    {
      title: "COMPANY",
      lists: ["About", "Careers", "Privacy Policy", "Terms"],
    },
  ];
  const socialLinks = [
    {
      title: "INSTAGRAM",
      icon: Instagram,
      href: "https://instagram.com",
    },
    {
      title: "X",
      icon: X,
      href: "https://x.com",
    },
    {
      title: "YOUTUBE",
      icon: Youtube,
      href: "https://youtube.com",
    },
    {
      title: "LINKEDIN",
      icon: LinkedIn,
      href: "https://linkedin.com",
    },
    {
      title: "PINTEREST",
      icon: Pinterest,
      href: "https://pinterest.com",
    },
  ];

  return (
    <footer className="w-full bg-black/90 text-white flex flex-col items-center py-14 mt px-4 md:px-42 gap-12 tracking-wider">
      <TextLogo className="h-2.5" />
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-42 w-full">
        {footerData.map((item, index) => (
          <ListDroper
            key={index}
            title={item.title}
            lists={item.lists}
            isFooter={true}
          />
        ))}
      </div>
      <div className="flex flex-col gap-8 border-t pt-8 text-2xs border-gray-400 md:flex-row md:justify-evenly w-full">
        {socialLinks.map(({ title, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 text-2xs cursor-pointer">
              <Icon className="w-4 h-4" />
              <span>{title}</span>
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
