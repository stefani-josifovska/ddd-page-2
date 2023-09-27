import { heroContentObj } from '@/app/globalTypes';
import { boxObject } from '@/app/globalTypes';

export const hero: heroContentObj = {
  title: 'Global invoicing compliance for SaaS & others',
  text: [
    'Enable global invoicing & e-invoicing for your SaaS via a single API integration. Add invoicing features to your product offering and set yourself apart from the competition or get compliance in countries you are scaling to.',
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
    title: 'Compliance',
    subtitle: 'Worldwide',
    content: [
      "Ensure your software's compliance with the local regulations of every country you are in or expanding to.",
    ],
  },
  {
    title: 'More value',
    subtitle: 'Add product features',
    content: [
      'By including invoicing with your product you can provide more value to your customer, increasing stickiness.',
    ],
  },
  {
    title: 'Reduce costs',
    subtitle: 'More money & more time',
    content: [
      'Let you developers work on your core business processes and spend their man-hours on value-adding activities.',
    ],
  },
  {
    title: 'One API',
    subtitle: 'Simple integration',
    content: ['An easy integration that you can do in 1-3 days.'],
  },
];
