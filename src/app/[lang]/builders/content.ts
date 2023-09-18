import { boxObject } from '@/app/globalTypes';

export type needsObjType = {
  icon: string;
  title: string;
  description: string;
};

export const boxContent: boxObject[] = [
  {
    title: 'Global tax compliance',
    subtitle: 'E-invoices & real-time reporting',
    content: [
      'Skip the bureaucracy and focus on your core product offering.',
      'Ensure that you are always up-to-date on the latest tax regulations wherever you have clients.',
    ],
  },
  {
    title: 'Scalability & Integration',
    subtitle: 'Expand to new markets',
    content: [
      'Multi-tenancy enabled through a single API.',
      'White-label UI allows you to maintain your brand image and provide added value to customers.',
    ],
  },
  {
    title: 'Automation',
    subtitle: 'Fast & easy payments with one click',
    content: [
      'Manage a growing volume of invoices and transactions with ease.',
      'Reduce manual tasks, minimize errors and increase overall efficiency.',
    ],
  },
];

export const needsObj: needsObjType[] = [
  {
    icon: '',
    title: 'e-Invoice creation',
    description:
      'We create a compliant e-invoice from invoice data sent from your software in .JSON form.',
  },
  {
    icon: '',
    title: 'Global distribution',
    description:
      'Send to local tax authorities, global e-invoicing networks, email, PDF, .XML.',
  },
  {
    icon: '',
    title: 'Management',
    description:
      'Manage you/your clients e-invoices with a powerful management module.',
  },
  {
    icon: '',
    title: 'Storage',
    description:
      'Safely store for up to 10 years in our digitally signed and legally approved archive.',
  },
  {
    icon: '',
    title: 'Embedded options',
    description:
      'Safely store for up to 10 years in our digitally signed and legally approved archive.',
  },
  {
    icon: '',
    title: 'Automation',
    description:
      'Automate workflow of an e-invoice. Set it up once and never again. Simple and easy.',
  },
];
