import { FaTelegram } from "react-icons/fa";

interface Props {
     locale: string;
}

const FooterContacts: React.FC<Props> = ({ locale }) => {
     return (
          <div className="flex flex-col gap-8 items-center mt-10 md:mt-0">
               <div className="flex flex-col gap-8 text-[16px] font-semibold">
                    <p className="text-[#a1a1a1]">Связаться с нами</p>
                    <div className="flex flex-col gap-4 md:gap-8">
                         <a target="_blank" href="tel:+998712000667" className="underline underline-offset-4 hover:no-underline">
                              +998 71 200 06 67
                         </a>
                         <a target="_blank" href="tel:+998959500636" className="underline underline-offset-4 hover:no-underline">
                              +998 95 950 06 36
                         </a>
                    </div>
               </div>
               <div className="h-10 flex justify-between">
                    <a target="_blank" href="https://t.me/+998712000667">
                         <FaTelegram className="h-full w-8" />
                    </a>
               </div>
          </div>
     );
};

export default FooterContacts;
