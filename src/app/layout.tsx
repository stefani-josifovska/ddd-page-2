import "./globals.scss";
import type { Metadata } from "next";
// import { Inter } from "@next/font/google";
import Navbar from "./_components/navbar/Navbar";
import localFont from "next/font/local";
import Footer from "./_components/footer/Footer";
import CookieConsent from "./_components/reusables/CookieConsent";

// const inter = Inter({ subsets: ["latin"] });

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "extraLight",
    },
    {
      path: "../../public/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DDD Invoices | Global e-invoicing & fiscalization with 1 API",
  description:
    "Enable local & global tax compliant invoicing for your software with a single invoicing, e-invoicing & fiscalization API. E-invoicing API for ERP, SaaS, e-commerce & other internet economy.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CookieConsent />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
