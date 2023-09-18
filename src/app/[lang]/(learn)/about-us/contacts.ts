import { StaticImageData } from 'next/image';
import denis from './denis.png';
import dusan from './dusan.jpg';
import aleksander from './aleksander.jpg';
import tomaz from './tomaz.jpg';
// import nusa from './nusa.jpg';

type contactObject = {
  name: string;
  position: string;
  img: StaticImageData;
};

export const contacts: contactObject[] = [
  {
    name: 'Denis V. P.',
    position: 'Business',
    img: denis,
  },
  {
    name: 'Dušan Pondelak',
    position: 'Product',
    img: dusan,
  },
  {
    name: 'Aleksander Oven',
    position: 'Technical',
    img: aleksander,
  },
  {
    name: 'Tomaž Grosman',
    position: 'Marketing',
    img: tomaz,
  },
  // {
  //   name: 'Nuša Drofenik',
  //   position: 'Tax & Legal',
  //   img: nusa,
  // },
];
