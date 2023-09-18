import { StaticImageData } from 'next/image';
import Poland from './poland.webp';
import Romania from './romania.webp';
import Italy from './italy.webp';
import Montenegro from './montenegro.webp';
import Slovenia from './slovenia.webp';
import Serbia from './serbia.webp';
import Germany from './germany.webp';
import France from './france.webp';
import Israel from './israel.webp';

type countryObj = {
  country: string;
  image: StaticImageData;
  title: string;
  link: string;
};

export const countries: countryObj[] = [
  {
    country: 'Poland',
    image: Poland,
    title: 'About KSef e-invoicing in Poland',
    link: 'https://dddinvoices.com/learn/e-invoicing-in-poland/',
  },
  {
    country: 'Romania',
    image: Romania,
    title: 'B2B E-invoicing in Romania',
    link: 'https://dddinvoices.com/learn/e-invoicing-romania/',
  },
  {
    country: 'Italy',
    image: Italy,
    title: 'All about B2B e-invoicing in Italy',
    link: 'https://dddinvoices.com/learn/e-invoicing-italy/',
  },
  {
    country: 'Montenegro',
    image: Montenegro,
    title: 'Electronic Fiscalization in Montenegro',
    link: 'https://dddinvoices.com/learn/e-invoicing-montenegro/',
  },
  {
    country: 'Slovenia',
    image: Slovenia,
    title: 'B2B E-Invoicing in Slovenia',
    link: 'https://dddinvoices.com/learn/e-invoicing-slovenia/',
  },
  {
    country: 'Serbia',
    image: Serbia,
    title: 'About SEF e-invoicing in Serbia',
    link: 'https://dddinvoices.com/learn/all-about-e-invoicing-in-serbia/',
  },
  {
    country: 'Germany',
    image: Germany,
    title: 'B2B e-invoicing in Germany',
    link: 'https://dddinvoices.com/learn/e-invoicing-germany/',
  },
  {
    country: 'France',
    image: France,
    title: 'All about B2B e-invoicing in France',
    link: 'https://dddinvoices.com/learn/e-invoicing-france/',
  },
  {
    country: 'Israel',
    image: Israel,
    title: 'B2B E-invoicing in Israel',
    link: 'https://dddinvoices.com/learn/e-invoicing-israel/',
  },
];
