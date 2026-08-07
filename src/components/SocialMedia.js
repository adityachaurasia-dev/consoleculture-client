import Link from "next/link";
import Instagram from "@/assets/icons/instagram.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Pinterest from "@/assets/icons/pinterest.svg";
import Youtube from "@/assets/icons/youtube.svg";
import X from "@/assets/icons/x.svg";

const SocialMedia = () => {
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
    <div className="flex flex-col gap-8 border-t pt-8 text-2xs border-gray-400 md:flex-row md:justify-evenly w-full">
      {socialLinks.map(({ title, href, icon: Icon }) => (
        <Link key={title} href={href} target="_blank" rel="noopener noreferrer">
          <div className="flex gap-2 text-2xs cursor-pointer">
            <Icon className="w-4 h-4" />
            <span>{title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
