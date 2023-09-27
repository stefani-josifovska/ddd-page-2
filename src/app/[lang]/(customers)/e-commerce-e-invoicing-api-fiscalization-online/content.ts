import { heroContentObj } from '@/app/globalTypes';
import { boxObject } from '@/app/globalTypes';

export const hero: heroContentObj = {
  title: 'Global automated billing & invoice processing for eCommerce',
  text: [
    'Expand your brand into new markets with a single platform and one API. Comply with local invoice specifications, real-time reporting/fiscalization requirements and e-invoicing for your B2C and B2B clients.',
  ],
  buttons: [
    {
      text: 'Start for free',
      href: 'https://app.dddinvoices.com/sign-up',
      variant: 'primary',
      color: 'orange',
    },
    {
      text: 'Talk to us',
      href: 'https://calendly.com/ddd-invoices/45min',
      isCalendly: true,
      variant: 'secondary',
      color: 'orange',
    },
  ],
};

export const perks: boxObject[] = [
  {
    title: 'Localization',
    subtitle: 'Domestic compliance',
    content: [
      'Make sure your invoicing is  compliant with all local tax regulations.',
    ],
  },
  {
    title: 'Correct VAT',
    subtitle: 'Mistake-free invoicing',
    content: ['Get instant compliance on a global scale with a single API.'],
  },
  {
    title: 'Automation',
    subtitle: 'Invoicing automation',
    content: [
      'Automated compliant invoicing & billing internationally, for global e-commerce platforms.',
    ],
  },
  {
    title: 'One solution',
    subtitle: 'Easy implementation',
    content: [
      'One solution to handle all specifics about VAT, currencies and invoicing.',
    ],
  },
];
