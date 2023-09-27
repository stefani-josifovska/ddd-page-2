import { heroContentObj } from '@/app/globalTypes';
import { boxObject } from '@/app/globalTypes';

export const hero: heroContentObj = {
  title: 'Add global invoicing & e-invoicing to your payment processor',
  text: [
    'Supercharge your payment processor with locally compliant invoicing & e-invoicing as part of your offering that goes beyond transactions. Increase stickiness and increase average revenue per customer.',
  ],
  buttons: [
    { text: 'Start for free', href: 'https://app.dddinvoices.com/sign-up', variant: 'primary', color: 'orange' },
    { text: 'Talk to us', href: '', variant: 'secondary', color: 'orange' },
  ],
};

export const perks: boxObject[] = [
  {
    title: 'Simple',
    subtitle: 'Seamless integration',
    content: [
      'With a single integration taking only a few hours, you will achieve compliant billing.',
    ],
  },
  {
    title: 'Automation',
    subtitle: 'Uninterrupted workflow',
    content: [
      'The invoice data is sent to our API, without interruption to your payment system. We handle everything and deliver it back to you.',
    ],
  },
  {
    title: 'Earn more',
    subtitle: 'Increase stickiness',
    content: [
      'By offering more financial services you provide more value to your customer and increase efficiency.',
    ],
  },
  {
    title: 'Safe archive',
    subtitle: 'Top-tier security',
    content: [
      'We know invoices & payments are a sensitive subject. We store invoices in encrypted & clustered archives.',
    ],
  },
];
