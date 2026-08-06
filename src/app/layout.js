import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import NavbarWrapper from "@/components/NavbarWrapper.js";

const culture = localFont({
  src: [
    { path: "../fonts/Culture-Light.woff2", weight: "300" },
    { path: "../fonts/Culture-Regular.woff2", weight: "400" },
    { path: "../fonts/Culture-Bold.woff2", weight: "700" },
  ],
  variable: "--culture-font",
  display: "swap",
});

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
