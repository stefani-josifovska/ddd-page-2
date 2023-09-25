import ecomm from "./icons/ecomm.svg";
import erp from "./icons/erps.svg";
import saas from "./icons/saas.svg";
import marketplace from "./icons/marketplace.svg";
import pos from "./icons/pos.svg";
import payment from "./icons/payment.svg";
import enterprise from "./icons/enterprises.svg";
import build from "./icons/build.svg";
import blog from "./icons/blog.svg";
import company from "./icons/company.svg";
import smb from "./icons/smb.svg";

export interface MenuItem {
  item: string;
  url: string;
  // children: Childobj[] | [];
  children: boolean;
  customSize?: number;
}

export type itemsArray = MenuItem[];

export const items: itemsArray = [
  {
    item: "Platform",
    url: "/platform-e-invoicing-invoicing-fiscalization-api",
    children: false,
  },
  {
    item: "Customers",
    url: "",
    children: true,
  },
  {
    item: "Pricing",
    url: "/pricing",
    children: false,
  },
  {
    item: "Learn",
    url: "",
    children: true,
  },
  {
    item: "API Documentation",
    url: "https://dddinvoices.com/documentation",
    children: false,
  },
];

export const providersContent = {
  category: "Software providers (B2B, B2G, B2B2B & B2B2C)",
  items: [
    {
      title: "eCommerce",
      description: "Automated tax compliant invoicing & billing",
      url: "/e-commerce-e-invoicing-api-fiscalization-online",
      icon: ecomm,
    },
    {
      title: "ERPs & CRMs",
      description: "Comply with new local e-invoicing regulations",
      url: "/software-invoicing-e-invoicing-api-fiscalization-online",
      icon: erp,
    },
    {
      title: "SaaS",
      description: "Add invoicing according to local tax regulations",
      url: "/saas-invoicing-e-invoicing-fiscalization-api",
      icon: saas,
    },
    {
      title: "Marketplaces",
      description: "Invoicing compliance for your marketplace",
      url: "/marketplace-invoicing-api-fiscalization",
      icon: marketplace,
    },
    {
      title: "POS & ticketing systems ",
      description: "Online fiscalization for required country ",
      url: "/pos-invoicing-fiscalization-api-online",
      icon: pos,
    },
    {
      title: "Payment processors",
      description: "Add locally compliant invoicing to your offering",
      url: "/payment-providers-invoicing-api",
      icon: payment,
    },
  ],
};

export const enterprisesContent = {
  category: "Enterprises (B2B & B2G)",
  items: [
    {
      title: "Established companies solving own invoicing",
      description:
        "Invoicing compliance for your own ERP or legacy systems integration, PEPPOL & complex invoicing workflows",
      url: "/enterprises-invoicing-e-invoicing-fiscalization",
      icon: enterprise,
    },
  ],
};

export const startupContent = {
  category: "Start-ups",
  items: [
    {
      title: "Building software with invoicing or billing module?",
      description:
        "Shorten your time-to-market & forget about local tax compliance regulations",
      url: "/",
      icon: build,
      customSize: 18,
    },
  ],
};

export const smbContent = {
  category: "SMBs (B2C, B2B, B2G)",
  items: [
    {
      title: "Invoicing for small & medium businesses ",
      description:
        "Web UI invoicing application for issuing locally tax compliant invoices.",
      url: "https://e-invoices.online",
      icon: smb,
      customSize: undefined,
    },
  ],
};

export const learnContent = [
  {
    title: "Blog & countries",
    description: "Latest news about regulations",
    url: "https://dddinvoices.com/learn",
    icon: blog,
  },
  {
    title: "Company",
    description: "Get to know us",
    url: "/about-us",
    icon: company,
  },
];
