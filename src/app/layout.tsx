import "./globals.scss";
import type { Metadata } from "next";
// import { Inter } from "@next/font/google";
import Navbar from "./_components/navbar/Navbar";
import localFont from "next/font/local";
// import Footer from "./_components/footer/Footer";
import CookieConsent from "./_components/reusables/CookieConsent";
import Script from "next/script";
const GTM_ID = "GTM-PKRMN4F";

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
    icon: "https://dddinvoices.com/images/bluelogo.png",
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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
    `}
      </Script>
      <body className={poppins.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        <CookieConsent />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
