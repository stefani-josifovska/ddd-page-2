import { heroContentObj } from '@/app/globalTypes';
import { boxObject } from '@/app/globalTypes';

export const hero: heroContentObj = {
  title: 'Invoicing & fiscalization for POS & ticketing systems',
  text: [
    'Give your POS, ticketing systems & other  machine softwares the ability of on-site & online fiscalization and automated invoicing. Simple integration with a single API to achieve global compliance.',
  ],
  buttons: [
    {
      text: 'Start for free',
      href: 'https://dddinvoices.com/sign-up',
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
    title: 'One API',
    subtitle: 'Integrated in 1-3 days',
    content: [
      'The single integration grants your software all of the capabilities required for compliant fiscalization & invoicing.',
    ],
  },
  {
    title: 'High volumes',
    subtitle: 'Can handle big numbers',
    content: [
      'Our platform is able to adhere to big volumes of requests, for example stadiums and busy ticketing machines.',
    ],
  },
  {
    title: 'Efficiency',
    subtitle: 'Total automation',
    content: [
      'Streamline your operations by automating the entire invoicing process. Error-free invoices generated in miliseconds.',
    ],
  },
  {
    title: 'Localized',
    subtitle: 'Local compliance, globally',
    content: [
      'We make sure that you can work with clients in various countries while adhering to local fiscal regulations.',
    ],
  },
];
