import TextLogo from "@/assets/logos/text-logo.svg";
import ListDroper from "./ListDroper";
import SocialMedia from "./SocialMedia";

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

  return (
    <footer className="w-full bg-black/90 text-white flex flex-col items-center py-14 mt px-4 md:px-42 gap-12 tracking-wider shadow shadow-taupe-50">
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
      <SocialMedia />
    </footer>
  );
};

export default Footer;
