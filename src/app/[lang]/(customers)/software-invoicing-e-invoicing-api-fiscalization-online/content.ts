import { heroContentObj } from '@/app/globalTypes';
import { boxObject } from '@/app/globalTypes';

export const hero: heroContentObj = {
  title: 'e-Invoicing compliance for ERPs & other Software Vendors',
  text: [
    'Comply with new local e-invoicing regulations or expand market reach with a single platform that enables worldwide invoicing compliance.',
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
    title: 'Send&receive',
    subtitle: 'Exchange platform',
    content: [
      'With integration, your software gains the ability to send & receive invoices directly from it.',
    ],
  },
  {
    title: 'One platform',
    subtitle: 'Limitless invoicing',
    content: [
      'Send to local tax authorities, ERPs, Peppol or emails in correct XML format, PDF or other, directly from your software.',
    ],
  },
  {
    title: 'Peppol',
    subtitle: 'International invoicing',
    content: [
      'Send to PEPPOL directly  through our platform. We can instantly transform your invoice data into PEPPOL BIS.',
    ],
  },
  {
    title: 'Easy',
    subtitle: 'Simple REST API',
    content: [
      'From simple .JSON object we will transform the data into locally compliant invoices.',
    ],
  },
];
