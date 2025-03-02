export interface Product {
     id: number;
     locale: string;
     mainDescription: string;
     name: string;
     price: number | null;
     slug: string;
     previewImage: {
          url: string;
     };
     brand: BrandInterface;
     categories: CategoryInterface[];
     variation: VariationInterface[];
}
export interface BrandInterface {
     id: number;
     slug: string;
     title: string;
}
export interface CategoryInterface {
     id: number;
     slug: string;
     title: string;
}
export interface VariationInterface {
     id: number;
     price: number | null;
     price_wifi: number | null;
     value: string;
     variation: "Мощность" | "Модель" | "Длина";
}
