import { strapiApiUrl } from "@/utils/consts";
import axios from "axios";

interface Props {
     locale: string;
     limit?: number;
     page?: number;
     brandValue?: string | null;
     categoryValue: string;
}
interface FilterInterface {
     brand?: {
          slug: {
               $in: string;
          };
     };
     categories?: {
          slug: {
               $in: string;
          };
     };
}

export async function getProducts({ locale, limit = 100, page = 1, brandValue, categoryValue }: Props) {
     const filters: FilterInterface = {};
     if (brandValue) {
          filters.brand = {
               slug: {
                    $in: brandValue,
               },
          };
     }
     if (categoryValue) {
          filters.categories = {
               slug: {
                    $in: categoryValue,
               },
          };
     }
     try {
          const response = await axios.get(`${strapiApiUrl}/products`, {
               params: {
                    locale: locale,
                    filters: filters,
                    populate: {
                         previewImage: true,
                         categories: true,
                         brand: true,
                         variation: true,
                    },
                    pagination: {
                         page: page,
                         pageSize: limit,
                    },
               },
          });
          return response.data;
     } catch (err) {
          return { error: true, msg: err };
     }
}
