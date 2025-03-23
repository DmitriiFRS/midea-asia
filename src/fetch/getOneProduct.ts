import { strapiApiUrl } from "@/utils/consts";

export async function getOneProduct({ locale, slug }: { locale: string; slug: string }) {
     try {
          const response = await fetch(`${strapiApiUrl}/products/${slug}`, {
               next: {
                    revalidate: 0,
               },
               cache: "no-store",
          });
          return response.json();
     } catch (err) {
          return { error: true, msg: err };
     }
}
