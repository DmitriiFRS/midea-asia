import { getCategories } from "@/fetch/getCategories";
import { getProductsSitemap } from "@/fetch/getProductsSitemap";
import { Category } from "@/interfaces/categories.interface";
import { Product } from "@/interfaces/products.interface";

export default async function sitemap() {
     const categories = await getCategories({ locale: "ru" });
     const products = await getProductsSitemap({ locale: "ru" });
     try {
          return [
               ...categories.data.map((el: Category) => {
                    return {
                         url: `https://climate-academy.uz/catalog/${el.slug}`,
                         lastModified: new Date(),
                         alternates: {
                              languages: {
                                   ru: `https://climate-academy.uz/catalog/${el.slug}`,
                                   uz: `https://climate-academy.uz/uz/catalog/${el.slug}`,
                              },
                         },
                    };
               }),
               ...products.data.map((el: Product) => {
                    return {
                         url: `https://climate-academy.uz/catalog/${el.categories.slug}/${el.slug}`,
                         lastModified: new Date(),
                         alternates: {
                              languages: {
                                   ru: `https://climate-academy.uz/catalog/${el.categories.slug}/${el.slug}`,
                                   uz: `https://climate-academy.uz/uz/catalog/${el.categories.slug}/${el.slug}`,
                              },
                         },
                    };
               }),
               {
                    url: "https://climate-academy.uz",
                    lastModified: new Date(),
                    alternates: {
                         languages: {
                              ru: "https://climate-academy.uz",
                              uz: "https://climate-academy.uz/uz",
                         },
                    },
               },
               {
                    url: "https://climate-academy.uz/catalog",
                    lastModified: new Date(),
                    alternates: {
                         languages: {
                              ru: "https://climate-academy.uz/catalog",
                              uz: "https://climate-academy.uz/uz/catalog",
                         },
                    },
               },
               {
                    url: "https://climate-academy.uz/news",
                    lastModified: new Date(),
                    alternates: {
                         languages: {
                              ru: "https://climate-academy.uz/news",
                              uz: "https://climate-academy.uz/uz/news",
                         },
                    },
               },
          ];
     } catch (error) {
          console.log("sitemap error: ", error);
     }
}
