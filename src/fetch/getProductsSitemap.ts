import { strapiApiUrl } from "@/utils/consts";
import axios from "axios";

interface Props {
     locale: string;
     limit?: number;
     page?: number;
     brandValue?: string | null;
     categoryValue?: string;
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

export async function getProductsSitemap({ locale }: Props) {
     try {
          const response = await axios.get(`${strapiApiUrl}/products`, {
               params: {
                    populate: {
                         categories: true,
                    },
                    locale: locale,
                    pagination: {
                         pageSize: 100,
                    },
               },
          });
          return response.data;
     } catch (err) {
          return { error: true, msg: err };
     }
}
