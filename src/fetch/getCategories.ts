import { strapiApiUrl } from "@/utils/consts";

interface Props {
     locale: string;
     categoryValue?: string;
}
interface FilterInterface {
     category?: {
          slug: {
               $in: string;
          };
     };
}
export async function getCategories({ locale, categoryValue }: Props) {
     const filters: FilterInterface = {};
     if (categoryValue) {
          filters.category = {
               slug: {
                    $in: categoryValue,
               },
          };
     }
     try {
          const response = await fetch(`${strapiApiUrl}/categories/${categoryValue}?locale=${locale}`);
          return response.json();
     } catch (err) {
          return { error: true, msg: err };
     }
}
