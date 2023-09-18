type sectionType = {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
};

export const sections: sectionType[] = [
  {
    name: 'Platform',
    href: '/',
  },
  {
    name: 'Customers',
    children: [
      { name: 'ERP', href: '/erps' },
      { name: 'SaaS', href: '/saas' },
      { name: 'eCommerce', href: '/ecommerce' },
      { name: 'Marketplace', href: '/marketplace' },
      { name: 'POS', href: '/pos' },
      { name: 'Enterprises', href: '/enterprises' },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
];
