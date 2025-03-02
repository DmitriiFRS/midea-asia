import { strapiApiUrl } from "@/utils/consts";
import axios from "axios";

interface PostFormData {
     url: string;
     name: string;
     phone: string;
     request: string;
     lng: string;
     referrer: string;
     utm: string;
     email?: string;
     comment?: string;
     organization?: string;
}

export async function postFormData({ url, name, phone, email, comment, request, lng, referrer, utm }: PostFormData) {
     try {
          const response = await axios.post(`${strapiApiUrl}/forms`, {
               data: {
                    name: name,
                    phone: phone,
                    email: email,
                    comment: comment,
                    request: request,
                    information: `Язык: ${lng} | страница заявки: ${url} | реферер: ${referrer} | utm: ${utm}`,
               },
               headers: {
                    "Content-Type": "application/json",
               },
          });
          return response.data.data;
     } catch (err: unknown) {
          if (axios.isAxiosError(err)) {
               return { error: true, msg: err.response };
          }
          return { error: true, msg: "An unknown error occurred" };
     }
}
