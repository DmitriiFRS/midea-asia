import { StaticImageData } from "next/image";

export interface Catalog {
     id: number;
     title: string;
     list: {
          id: number;
          title: string;
          href: string;
          image: StaticImageData;
     }[];
}
