export interface NewsPageInterface {
     id: number;
     title: string;
     description: string;
     slug: string;
     preview_description: string;
     image: {
          url: string;
     };
     date: string;
}
