"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import LangDropdown from "./LangDropdown";
import Image, { StaticImageData } from "next/image";
import ru from "@icons/common/russia.svg";
import uz from "@icons/common/uzb.webp";
import arrow from "@icons/common/arrow-tobottom.svg";

interface Props {
     locale: string;
     inModal?: boolean;
     inBurger?: boolean;
}

const LangSwitcher: React.FC<Props> = ({ locale, inModal, inBurger }) => {
     const [isOpen, setIsOpen] = useState(false);
     const localesArray = ["ru", "uz"];
     const locales = {
          ru: "RU",
          uz: "UZ",
     };
     const currentLocale = locales[locale as keyof typeof locales];
     function toggleDropdown(currentLng?: string) {
          if (currentLng === locale) return;
          const scrollWidth = window.innerWidth - document.body.clientWidth;
          if (isOpen) {
               if (!inModal && !inBurger) {
                    document.body.style.overflow = "auto";
                    document.body.style.paddingRight = `0px`;
               }
               setIsOpen(false);
          } else {
               if (inModal && !inBurger) {
                    document.body.style.overflow = "hidden";
                    document.body.style.paddingRight = `${scrollWidth}px`;
               }

               setIsOpen(true);
          }
     }
     const pathName = usePathname();
     const redirectedPathName = (locale: string) => {
          if (!pathName) return "/";
          const segments = pathName.split("/");
          if (!segments[1] || /^[a-z]{2}$/.test(segments[1])) {
               segments[1] = locale;
          } else {
               segments.splice(1, 0, locale);
          }

          return segments.join("/");
     };
     return (
          <div className="relative">
               <button className="flex gap-2 border px-2 py-1 rounded-full" onClick={() => toggleDropdown()}>
                    <span className="text-[16px]">{currentLocale}</span>
                    <Image src={arrow} alt="arrow" width={16} height={16} className={`duration-300 ${isOpen ? "rotate-180" : ""}`} />
               </button>
               <LangDropdown
                    locale={locale}
                    isOpen={isOpen}
                    redirectedPathName={redirectedPathName}
                    localesArray={localesArray}
                    locales={locales}
                    toggleDropdown={toggleDropdown}
               />
               {isOpen && <div onClick={() => toggleDropdown()} className="fixed left-0 top-0 z-[60] w-screen h-screen cursor-auto"></div>}
          </div>
     );
};

export default LangSwitcher;
