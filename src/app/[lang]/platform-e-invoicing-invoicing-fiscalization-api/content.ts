import { heroContentObj, boxObject, hintsType } from "@/app/globalTypes";

export const platformHero: heroContentObj = {
  title: "One platform for all of your invoicing needs",
  text: [
    "The DDD Invoices e-invoicing platform manages all aspects of invoicing, e-invoicing & real-time reporting between B2C, B2B and B2G partners.",
  ],
  buttons: [
    {
      text: "Start for free",
      href: "https://dddinvoices.com/sign-up",
      variant: "primary",
      color: "orange",
      className: "px-20",
    },
  ],
};

export const perks: boxObject[] = [
  {
    title: "Easy",
    subtitle: "One day integration",
    content: [
      "It's a simple one day integration, that your developers can handle, so TOC are negligible.",
    ],
  },
  {
    title: "Less work",
    subtitle: "Skip all development",
    content: [
      "We allow you to skip all future development & maintenance of necessary invoicing compliance, saving on time & money.",
    ],
  },
  {
    title: "Expansion",
    subtitle: "Expand with ease",
    content: [
      "Scale to a new country with ease, as our platform handles local invoicing requirements.",
    ],
  },
  {
    title: "Cut costs",
    subtitle: "Save 60-80% on invoicing",
    content: [
      "E-invoices are in comparison to PDF & paper invoices way cheaper.",
    ],
  },
  {
    title: "Earn",
    subtitle: "Re-sell our services",
    content: [
      "You can re-sell our services to your clients, giving you a new revenue stream.",
    ],
  },
  {
    title: "Automation",
    subtitle: "Compliant invoicing",
    content: [
      "Integrate with your existing software to automate the sending and receiving of e-invoices.",
    ],
  },
  {
    title: "Centralization",
    subtitle: "One platform",
    content: [
      "Manage your invoice issuance and receiving processes in a single solution, all while following latest legislation.",
    ],
  },
  {
    title: "Scalability",
    subtitle: "Limitless expansion",
    content: [
      "Our solution supports your company's growth. Easily handle increasing invoice quantities and more complex invoicing processes.",
    ],
  },
  {
    title: "Compliance",
    subtitle: "Latest regulations",
    content: [
      "Rely on our service to always be up-to-date with various invoicing & e-invoicing regulations.",
    ],
  },
];

export const hints: hintsType = [
  {
    positionX: "60%",
    positionY: "5%",
    content: ["Integrate our API into your software in 1-3 days"],
  },
  {
    positionX: "60%",
    positionY: "20%",
    content: [
      "Your developer will pack the invoice data into a simple .JSON file, leaving the e-invoicing and fiscalization specifications up to us.",
    ],
  },
  {
    positionX: "75%",
    positionY: "50%",
    content: [
      "Invoice data will be transformed into a locally compliant invoice of any desired country. We cover all types of invoices such as electronic, fiscalized or a PDF invoices. We also offer a fiscalization service without the generation of invoices.",
    ],
  },
  {
    positionX: "70%",
    positionY: "90%",
    content: [
      "Invoices are delivered to tax authorites, clients softwares, emails and more, granting your software globally compliant invoicing!",
    ],
  },
];
