import Link from "next/link";

const IconLink = ({ icon: Icon, href }) => {
  return (
    <Link href={href}>
      <Icon className="w-8 h-8" />
    </Link>
  );
};

export default IconLink;
