import { heroContentObj } from '@/app/globalTypes';
import { boxObject } from '@/app/globalTypes';

export const hero: heroContentObj = {
  title: 'Optimized eProcurement for Marketplaces',
  text: [
    'Make your online marketplace compliant with all of the correct local and international B2C & B2B invoicing regulations. Empower growth, through an integration with a single API.',
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
    title: 'Automation',
    subtitle: 'Workflow automation',
    content: [
      'Automated billing & self-billing internationally for marketplaces.',
    ],
  },
  {
    title: 'Multi-level',
    subtitle: 'Compliance locally',
    content: [
      'Compliance for multi-tenants on a international scale, by all local invoicing regulations.',
    ],
  },
  {
    title: 'Tax rates',
    subtitle: 'Mistake-free invoicing',
    content: [
      'Correct tax rates applied to bills and reported to tax authorities as required.',
    ],
  },
  {
    title: 'Integration',
    subtitle: 'Complete in 1-3 days',
    content: [
      'One integration with our platform allows you to handle all specifics about VAT, currencies and billing.',
    ],
  },
];
