export type points = string[];

export type pricingObj = {
  type: string;
  subtitle: string;
  title: string;
  points: string[];
  disclaimer: string;
};

export const domestic: pricingObj = {
  type: 'domestic',
  subtitle: 'For domestic invoices',
  title: '0,52 € per e-invoice',
  points: [
    'No starting fees',
    'No hidden fees',
    'Tax authority approved',
    'Pay per use',
    '100% compliance',
  ],
  disclaimer:
    'We charge per every sent/received document through our platform, which can be an e-invoice, fiscalized invoice or email invoice, depending on the countries regulation. Pricing is valid for the transmission of invoices with invoice value under 10,000€. For transmission of invoices with higher value talk to us.',
};

export const international: pricingObj = {
  type: 'international',
  subtitle: 'For international invoices',
  title: '0,73 € per e-invoice',
  points: [
    'No starting fees',
    'No hidden fees',
    'Send to PEPPOL',
    'Pay ony for use',
    'Compliance forever',
  ],
  disclaimer:
    'We charge per every sent/received document through our platform, which can be an e-invoice, fiscalized invoice or email invoice, depending on the countries regulation. Pricing is valid for the transmission of invoices with invoice value under 10,000€. For transmission of invoices with higher value talk to us.',
};

export const customPoints: points = [
  'More than 1000 total invoices per month?',
  'Need only fiscalization w/o invoice generation ?',
  'Require various types of invoices?',
  'Prefer a fixed monthly package?',
];
