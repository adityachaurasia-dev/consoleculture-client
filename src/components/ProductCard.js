import Link from "next/link";

const ProductCard = ({ product }) => {
  const { images, title, originalPrice, discountPrice, slug } = product;
  return (
    <div className="flex shrink-0 flex-col gap-2 w-[48%] md:w-[24%] h-auto">
      <div className="relative overflow-hidden group">
        <Link href={`products/${slug}`}>
          <img
            src={images[0]}
            className="aspect-11/15 w-full hover:opacity-0"
          />
          <img
            src={images[1]}
            className="aspect-11/15  absolute top-0 left-0 opacity-0 hover:opacity-100"
          />
        </Link>
        <div className="w-full bg-black/80 text-center text-xs text-white py-3 translate-y-0 absolute duration-300 transition-all group-hover:-translate-y-10">
          ADD TO CART
        </div>
      </div>
      <div className="text-xs">{title}</div>
      <div className="text-3xs md:text-xs flex justify-between">
        <span className="opacity-70 line-through text-red-600">
          RS.{originalPrice.toFixed(2)}
        </span>
        <span>RS.{discountPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
