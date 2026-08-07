import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import NavbarWrapper from "@/components/NavbarWrapper";

const culture = localFont({
  src: [
    { path: "../fonts/Culture-Light.woff2", weight: "300" },
    { path: "../fonts/Culture-Regular.woff2", weight: "400" },
    { path: "../fonts/Culture-Bold.woff2", weight: "700" },
  ],
  variable: "--culture-font",
  display: "swap",
});

export const metadata = {
  title: "Console Culture | Premium Streetwear & Clothing",
  description:
    "Console Culture is a modern clothing brand offering premium streetwear, oversized t-shirts, hoodies, and everyday essentials designed for those who live the culture.",
  keywords: [
    "Console Culture",
    "streetwear",
    "oversized t-shirts",
    "hoodies",
    "fashion",
    "clothing brand",
  ],
  openGraph: {
    title: "Console Culture | Premium Streetwear & Clothing",
    description:
      "Premium streetwear, oversized t-shirts, hoodies, and everyday essentials.",
    url: "https://yourdomain.com",
    siteName: "Console Culture",
    images: [
      {
        url: "/og-image.jpg", // Place this image in the public folder
        width: 1200,
        height: 630,
        alt: "Console Culture",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Console Culture",
    description:
      "Premium streetwear, oversized t-shirts, hoodies, and everyday essentials.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${culture.variable} h-full antialiased`}>
      <body className="font-culture min-h-full flex flex-col">
        <NavbarWrapper />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
