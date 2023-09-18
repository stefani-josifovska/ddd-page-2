type childObject = {
  title: string;
  url?: string;
};

type itemObject = {
  title: string;
  url?: string;
  children: childObject[];
};

export const items: itemObject[] = [
  {
    title: "Platform",
    url: "/platform-e-invoicing-invoicing-fiscalization-api",
    children: [
      { title: "E-invoicing" },
      { title: "Real-time reporting" },
      { title: "Archive" },
      { title: "PEPPOL" },
      { title: "Tax-reporting" },
      { title: "Automation" },
    ],
  },
  {
    title: "Customers",
    children: [
      {
        title: "ERP",
        url: "/software-invoicing-e-invoicing-api-fiscalization-online",
      },
      {
        title: "SaaS",
        url: "/saas-invoicing-e-invoicing-fiscalization-api",
      },
      {
        title: "eCommerce",
        url: "/e-commerce-e-invoicing-api-fiscalization-online",
      },
      {
        title: "Marketplace",
        url: "/marketplace-invoicing-api-fiscalization",
      },
      {
        title: "POS",
        url: "/pos-invoicing-fiscalization-api-online",
      },
      {
        title: "Enterprises",
        url: "/enterprises-invoicing-e-invoicing-fiscalization",
      },
    ],
  },
  {
    title: "Learn",
    children: [
      {
        title: "API documentation",
        url: "/documentation",
      },
      {
        title: "Pricing",
        url: "/pricing",
      },
      {
        title: "Blog & Countries",
        url: "/learn",
      },
      {
        title: "Company",
        url: "/about-us",
      },
    ],
  },
  {
    title: "Legal",
    children: [
      { title: "Terms", url: "/terms-and-conditions" },
      { title: "Privacy policy", url: "/privacy-policy" },
    ],
  },
];
