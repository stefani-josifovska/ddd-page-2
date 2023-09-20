import { StaticImageData } from "next/image";
import sendRes from "./sendReceive.png";
import eInv from "./eInv.png";
import realTime from "./realTime.png";
import archive from "./archive.png";
import taxRecord from "./taxReport.png";
import invoiceAut from "./invoiceAut.png";
import { hintsType } from "@/app/globalTypes";

export type questionObjectType = {
  title: string;
  subtitle: string;
  answer: string;
  image: StaticImageData;
  alt: string;
  hints: hintsType;
};

export type featureObjectType = {
  title: string;
  subtitle?: string;
  answer?: string;
};

export const questions: questionObjectType[] = [
  {
    title: "Send & receive",
    subtitle: "Borderless compliant invoice exchange",
    answer:
      "Use our dashboard only for monitoring. Issue and receive compliant invoices directly from your software with correct VAT & language in +30 countries.",
    image: sendRes,
    alt: "",
    hints: [
      {
        positionX: "65%",
        positionY: "100px",
        content: [
          "Use the dashboard to oversee invoices, credit-notes & storno invoices, that you or your customers have issued/received from other softwares.",
        ],
        title: "Oversee the invoices",
        width: "12.5rem",
      },
      {
        positionX: "30%",
        positionY: "200px",
        content: [
          "See how many invoices each of your customers is sending/receiving, so you can bill them accordingly.",
        ],
      },
    ],
  },
  {
    title: "E-Invoicing",
    subtitle: "One solution for B2B and B2G invoicing",
    answer:
      "Automate compliance with country specific e-invoicing standards & issue e-invoices to tax authorities and clients around the world.",
    image: eInv,
    alt: "",
    hints: [
      {
        positionX: "57%",
        positionY: "77%",
        content: [
          "E-Invoice is an invoice in a structured, machine-readable electronic format (XML, UBL 2.1 . etc.) that can be sent directly from software to software.",
          "More and more tax authorities around the world are making the use of e-invoices mandatory in B2G & B2B sector for the purpose of VAT collection.",
          {
            url: "https://dddinvoices.com/learn/what-is-e-invoicing/",
            text: "Read more about e-invoicing >",
          },
        ],
        title: "What is an e-invoice?",
        width: "14rem",
      },
    ],
  },
  {
    title: "Real-time reporting",
    subtitle: "Your fiscalization needs covered ",
    answer:
      "Upgrade your software with compliant B2C invoicing and simplified e-reporting/live reporting  to tax authorities.",
    image: realTime,
    alt: "",
    hints: [
      {
        positionX: "65%",
        positionY: "70%",
        content: [
          "Real-time reporting or fiscalization is mostly used in B2C invoicing for the purpose of transaction reporting to the tax authorities.",
          "When a tax authority receives the data about the invoice, it returns a special code that is placed on the invoice, stating that the invoice was reported to them.",
          {
            url: "https://dddinvoices.com/learn/real-time-reporting-europe/",
            text: "Read more about fiscalization requirements >",
          },
        ],
        title: "Real-time reporting",
        width: "12.5rem"
      },
    ],
  },
  {
    title: "Secure archive",
    subtitle: "Store invoices on the approved archive",
    answer:
      "Safely store invoices for the legally required period (5-10 years), e-sign and EU time-stamp them.",
    image: archive,
    alt: "",
    hints: [
      {
        positionX: "55%",
        positionY: "34%",
        content: [
          "Safely store invoices and attachments on a legally approved, secure, clustered, and encrypted archive with back-ups providing you with peace of mind.",
        ],
        title: "Archiving invoices",
        width: "11.5rem"
      },
      {
        positionX: "42%",
        positionY: "95%",
        content: [
          "Your invoices are e-signed in order to guarantee authenticity of origin and integrity of the invoice content.",
        ],
      },

      {
        positionX: "77%",
        positionY: "90%",
        content: [
          "If required, we can provide you with an EU time-stamping option that certifies the existence of the document at a precise date and time. It ensures the document has not been falsified since the invoice creation.",
        ],
      },
    ],
  },
  {
    title: "Tax-reporting",
    subtitle: "Save time on reports",
    answer:
      "Perform month-end/year-end tax reporting with a simple click using invoices from the archive (not required in all countries).",
    image: taxRecord,
    alt: "",
    hints: [
      {
        positionX: "70%",
        positionY: "46%",
        content: [
          "Safely store invoices and attachments on a legally approved, secure, clustered, and encrypted archive with back-ups providing you with peace of mind.",
        ],
        title: "Tax reporting",
        width: "10rem"
      },
    ],
  },
  {
    title: "Invoice automation",
    subtitle: "No manual tasks",
    answer:
      "Automate the invoice workflow from data-to-delivery and effortlessly handle billing & mass-invoicing.",
    image: invoiceAut,
    alt: "",
    hints: [
      {
        positionX: "57%",
        positionY: "50%",
        content: [
          "Set up the flow of the invoice once and have it work every time.",
          "Whether you're an online store owner with invoice data or an enterprise with periodic mass invoicing - feed the API with your data and our platform will generate compliant invoices, distribute & report them to tax atuhorities and clients, store them as per your requirements or return them back to your software.",
        ],
        title: "Automation",
        width: "9rem"
      },
    ],
  },
  // {
  //   title: "Embedded UI",
  //   subtitle: "Add invoicing UI",
  //   answer:
  //     "Embed fully capable invoicing front-end directly in your software for manual invoice creation.",
  //   image: embedUI,
  //   alt: "proba",
  //   hints: [
  //     {
  //       positionX: "200px",
  //       positionY: "200px",
  //       content: [
  //         "Safely store invoices and attachments on a legally approved, secure, clustered, and encrypted archive with back-ups providing you with peace of mind.",
  //       ],
  //     },
  //     {
  //       positionX: "200px",
  //       positionY: "200px",
  //       content: [
  //         "Your invoices are e-signed in order to guarantee authenticity of origin and integrity of the invoice content.",
  //       ],
  //     },

  //     {
  //       positionX: "200px",
  //       positionY: "200px",
  //       content: [
  //         "If required, we can provide you with an EU time-stamping option that certifies the existence of the document at a precise date and time. It ensures the document's has not been falsified since the invoice creation.",
  //       ],
  //     },
  //   ],
  // },
];

export const features: featureObjectType[] = [
  {
    title: "Dashboard",
    subtitle: "Dashboard to oversee invoices",
    answer:
      "Use our dashboard for checking the sent, received & archived invoices through our platform from various sources. Manage your clients and more.",
  },
  {
    title: "Send & receive invoices",
    subtitle: "Borderless compliant invoice exchange",
    answer:
      "Issue compliant PDF invoices with correct VAT and language in +30 countries, directly from your software. Receive or pull them from various tax authorities & sources in e-invoice or non-e-invoices formats. We can OCR non-e-invoices. We take all received invoices and transform them so they are ready for import directly in your ERP.",
  },
  {
    title: "E-Invoicing",
    subtitle: "One solution for B2B & B2G invoicing",
    answer:
      "Automate the compliance with e-invoicing standards around the world & distribute to tax authorities, PEPPOL and clients globally in locally compliant e-invoice format.",
  },
  {
    title: "E-Invoicing networks",
    subtitle: "Send invoices to e-invoicing networks",
    answer:
      "Send invoices to your clients via PEPPOL e-invoicing network in PEPPOL BIS format (DBNA coming soon). Read more about PEPPOL network and DDD Invoices as a certified access point.",
  },
  {
    title: "Real-time reporting",
    subtitle: "Your fiscalization needs covered",
    answer:
      "Real-time reporting is required in specific countries, also known as fiscalization or live reporting. We give your software compliant B2C invoicing and perform e-reporting/live reporting to authorities.",
  },
  {
    title: "Secure archive",
    subtitle: "Store invoices on the approved archive",
    answer:
      "Safely store invoices for the legally required period (5-10 years) on encrypted and backed-up storage. E-sign them and EU time-stamp them for legal purposes.",
  },
  {
    title: "Tax-reporting",
    subtitle: "Save time on reports",
    answer:
      "Perform end of the month/year tax reporting with a simple click from invoices in archive (not required in all countries).",
  },
  {
    title: "Invoice automation",
    subtitle: "No manual tasks",
    answer:
      "Completely automate the invoice workflow from data to delivery to tax authority or execute step-by-step workflow.",
  },
  {
    title: "Embedded UI",
    subtitle: "Add invoicing UI to your  software",
    answer:
      "Embed fully customizable invoicing front-end directly in your software, that you or  your customers can use. Add your logo and style.",
  },
  {
    title: "UI to manually correct invoices",
    subtitle: "Multliple options of entry",
    answer:
      "You have an option to also manually correct invoice from inside of our platform if the situation requires that.",
  },
  {
    title: "Mass invoicing",
    subtitle: "Massive scale of same type of invoiced",
    answer:
      "Send vast amount of the same type of invoices. Upload the document with invoice data in CSV format & we will make sure it arrives on the right place in the correct compliant invoice format.",
  },
  {
    title: "Billing",
    subtitle: "Send invoices at the moment of creation",
    answer:
      "Create automated billing for you or your clients so you do not have to send invoices one-by-one.",
  },
];

export const enterprise: featureObjectType[] = [
  {
    title: "Invoicing",
    subtitle: "Borderless compliant invoice exchange",
  },
  {
    title: "E-invoicing",
    subtitle: "B2B e-invoicing",
  },
  {
    title: "Fiscalization/real-time reporting",
    subtitle: "B2C invoicing with fiscalization",
  },
  {
    title: "VAT compliance",
    subtitle: "One solution for B2B & B2G invoicing",
    answer:
      "Automate compliance with e-invoicing standards around the world & distribute to tax authorities, Peppol and clients globally.",
  },
  {
    title: "EU-trusted time stamps",
    subtitle: "Send invoices to e-invoicing networks",
    answer:
      "Send invoices to your clients via PEPPOL e-invoicing network (DBNA coming soon). Read more about PEPPOL network and DDD Invoices as a certified access point.",
  },
  {
    title: "E-signatures",
    subtitle: "Your fiscalization needs covered",
  },
  {
    title: "Specific billing",
    subtitle: "Your fiscalization needs covered",
  },
  {
    title: "Integration",
    subtitle: "Store invoices in the approved archive",
  },
  {
    title: "Document exchange",
    subtitle: "Save time on reports",
  },
  {
    title: "Payment solutions",
    subtitle: "Services for processing various forms of payments",
  },
  {
    title: "Wholesale legal requirements",
    subtitle: "Adhere to legal obligations related to bulk sales",
  },
  {
    title: "Retail legal requests",
    subtitle: "Adhere to legal obligations applicable to retail transaction",
  },
  {
    title: "Security",
    subtitle:
      "Ensuring protection and safety of sensitive data and information",
  },
  {
    title: "Distribution to tax authorities",
    subtitle: "Transmit data to tax agencies as required by regulations",
  },
  {
    title: "Distribution to PEPPOL network",
    subtitle: "Sending data to the PEPPOL network for streamlined exchange",
  },
  {
    title: "PEPPOL BIS compliance",
    subtitle:
      "Adhering to PEPPOL format standards to ensure seamless compatibility",
  },
  {
    title: "Print to PEPPOL",
    subtitle:
      "Send invoices to PEPPOL from software that does not support API integration",
  },
  {
    title: "Print to e-invoice",
    subtitle:
      "Generate e-invoices from software that does not support API integration",
  },
  {
    title: "Compliance for legacy systems",
    subtitle: "No changes in code",
  },
  {
    title: "AI text recognition",
    subtitle: "Add invoicing UI to your  software",
  },
  {
    title: "Global fiscalization compliance",
    subtitle: "Meet worldwide tax regulations for financial transactions",
  },
  {
    title: "Global legal compliance",
    subtitle: "Adhere to legal invoicing standards on a global scale",
  },
  {
    title: "Automated e-documents distribution",
    subtitle: "Massive scale of same type of invoiced ",
  },
  {
    title: "Live-time e-archive",
    subtitle: "Long-term storage of electronic documents",
  },
  {
    title: "Field sales invoicing",
    subtitle: "Creating invoices directly while in the field or on-site",
  },
  {
    title: "Fiscal compliance",
    subtitle: "Abide by tax and financial regulations",
  },
  {
    title: "PDF creation",
    subtitle: "Generation of VAT compliant PDFs and delivery to clients",
  },
  {
    title: "PDF modification",
    subtitle: "Editing and altering existing PDF invoices",
  },
  {
    title: "Mass invoice automation",
    subtitle: "Automating the processing and creation of bulk invoices",
  },
  {
    title: "Specific development projects",
    subtitle: "Projects tailored to meet distinct invoicing needs and goals",
  },
  {
    title: "VAT ID checks",
    subtitle: "Verification of Value-Added Tax Identification Numbers",
  },
  {
    title: "AR automation",
    subtitle:
      "Automating Accounts Receivable processes for increased efficiency",
  },
  {
    title: "AP automation",
    subtitle:
      "Automating Accounts Payable tasks to enhance operational efficiency",
  },
  {
    title: "Tax automation",
    subtitle: "Streamlining tax-related processes through automation",
  },
  {
    title: "Document transformation",
    subtitle: "Converting documents from one format to another",
  },
  {
    title: "Mass transformation to e-invoices",
    subtitle: "Converting bulk invoice data into compliant e-invoices",
  },
  {
    title: "Payment integration",
    subtitle:
      "Incorporating compliant payment & invoicing processing capabilities seamlessly",
  },
  {
    title: "On-line invoicing",
    subtitle:
      "Creating sending, receiving & storing invoices via online platform",
  },
  {
    title: "Document digitalization",
    subtitle: "Converting physical documents into digital formats",
  },
  {
    title: "Improved invoice confirmation workflow",
    subtitle: "Managed process for confirming and authorizing invoices",
  },
  {
    title: "Components for mobile users",
    subtitle: "Tools designed for use by mobile device users on-site",
  },
  {
    title: "Unlimited expansion",
    subtitle:
      "Possibility for continuous growth and scalability without restrictions",
  },
  {
    title: "Managing implementation projects",
    subtitle: "Overseeing and handling the execution of projects effectively",
  },
];

export const questionsPricing: featureObjectType[] = [
  {
    title: "When will I get billed?",
    answer:
      "We bill on a monthly basis. You can choose to pay with card or get an e-invoice at the end of the billing period.",
  },
  {
    title: "How much does it cost to integrate with DDD Invoices?",
    answer: "Zero! You can start absolutely for free.",
  },
  {
    title: "Do you offer any discounts on volume?",
    answer:
      "Yes. The more invoices you send through our platform, the less you pay per invoice.",
  },
  {
    title:
      "What if I need different invoicing solution for different countries?",
    answer:
      "One integration with our platform covers all local specifics of invoicing in each of the countries in which you want to operate. You can send invoices to fiscalization and invoice data to e-invoice transformation in different countries with the same API.",
  },
  {
    title: "How can I transfer the costs to my end customers?",
    answer:
      'If you are a software provider you might want to "re-sell" or include the invoicing service into your product. We offer a clear breakdown for each of your customers, so you know exactly who and how much to bill.',
  },
  {
    title: "Have any more questions?",
    answer:
      "Schedule a meeting and talk to us, or write to us at info@dddinvoices.com",
  },
];
