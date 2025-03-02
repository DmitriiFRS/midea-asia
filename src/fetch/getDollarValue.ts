import { strapiApiUrl } from "@/utils/consts";

export async function getDollarValue() {
     try {
          const response = await fetch(`${strapiApiUrl}/dollar-val`, {
               next: {
                    revalidate: 0,
               },
          });
          return response.json();
     } catch (err) {
          return { error: true, msg: err };
     }
}
