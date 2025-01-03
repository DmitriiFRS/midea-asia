import { postFormData } from "@/fetch/postApplication";
import axios from "axios";

export async function sendForm({
  name,
  phone,
  email,
  comment,
  lng,
  url,
  referrer,
  utm,
}: {
  name: string;
  phone: string;
  email?: string;
  organization?: string;
  comment?: string;
  lng: string;
  url: string;
  referrer: string;
  utm: string;
}) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const TOKEN = "7947448735:AAHx7fsYlvoGq9EGr034wRLZWsIC01RDmXQ";
    const CHAT_ID = "-1002407178352";
    const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const message = `
         Новая заявка:
         Имя: ${name}
         Телефон: ${phone}
         Описание: ${comment || "не указано"}
         Язык: ${lng}
         Страница заявки: ${url}
      `;
    await axios.post(TELEGRAM_API, {
      chat_id: CHAT_ID,
      text: message,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Ошибка при отправке формы:", err.response?.data);
    return { error: true, msg: err?.response };
  }
}
