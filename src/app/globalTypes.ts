export type boxObject = {
  title: string;
  subtitle: string;
  content: string[];
  link?: {
    text: string;
    href: string;
  };
};

export type heroContentObj = {
  title: string;
  text: string[];
  buttons: {
    text: string;
    href: string;
    variant: string;
    color: string;
    isCalendly?: boolean;
    className?: string;
  }[];
  img?: { src: string; alt: string };
};

type hintContentEl = string | { url: string; text: string };

export type hintObject = {
  positionX: string;
  positionY: string;
  content: hintContentEl[];
  title?: string;
  width?: string;
};

export type hintsType = hintObject[];
