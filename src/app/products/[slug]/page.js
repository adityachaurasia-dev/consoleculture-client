import ListDroper from "@/components/ListDroper";
import ProductDetail from "@/components/ProductDetail";
import { PRODUCTS } from "@/data/Product";

const Product = async ({ params }) => {
  const { slug } = await params;

  const product = PRODUCTS.find((product) => product.slug === slug);
  const { images, title, discountPrice, originalPrice } = product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[70%] w-full md:grid md:grid-cols-2 md:gap-1 md:p-1">
          {images.map((img, index) => (
            <img src={img} key={index} />
          ))}
        </div>
        <div className="md:w-[30%] w-full">
          <div className="md:sticky md:top-20 md:self-auto px-8 py-6 gap-6 flex flex-col">
            <h1>{title}</h1>
            <div className="flex gap-4 text-sm items-center">
              <span className="opacity-70 line-through text-red-600">
                RS.{originalPrice.toFixed(2)}
              </span>
              <span>RS.{discountPrice.toFixed(2)}</span>
              <div className="bg-red-600 text-white font-bold items-center text-3xs flex px-2 py-1 rounded-sm">
                Save{" "}
                {(
                  ((originalPrice - discountPrice) / originalPrice) *
                  100
                ).toFixed(0)}
                %
              </div>
            </div>
            <ProductDetail></ProductDetail>
            <button className="text-sm w-full border border-black py-3 hover:bg-black hover:text-white">
              ADD TO CART
            </button>
            <button className="text-sm py-3 w-full bg-black text-white">
              BUY NOW
            </button>
            <ListDroper
              title="Product Details"
              lists={[
                "PRODUCT DETAILS",
                "Composition: 100% Cotton",
                "GSM: 240",
                "Wash care: Machine wash cold with similar colors.",
                "Color: Red",
                "Only non-chlorine.",
                "Warm Iron if needed.",
              ]}
            />
            <ListDroper
              title="DESCRIPTION"
              lists={[
                "Contemporary design defines this baseball cap, defined by a contrasting rubberized Ferrari logo print on the front. Crafted from cotton twill, it features a silver-finish hook-and-loop closure and a Prancing Horse embellishment",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
