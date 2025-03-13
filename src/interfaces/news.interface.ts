export interface NewsInterface {
     id: number;
     title: string;
     description: string;
     slug: string;
     image: {
          url: string;
     };
     date: string;
     locale: string;
     preview_description: string;
}
