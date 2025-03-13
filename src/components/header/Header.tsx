"use client";

import Container from "../common/container/Container";
import Image from "next/image";
import logo from "@icons/common/ca-logo.webp";
import Link from "next/link";
import LangSwitcher from "../common/langSwitcher/LangSwitcher";
import { useEffect, useState } from "react";
import Burger from "./Burger";
import pin from "@icons/common/pin-white.svg";
import phone from "@icons/common/phone.svg";

interface Props {
     locale: string;
     nav: {
          id: number;
          title: string;
          href: string;
          isExternal?: boolean;
     }[];
}

const Header: React.FC<Props> = ({ locale, nav }) => {
     const [sticky, setSticky] = useState<boolean>(false);
     function isSticky() {
          if (window.pageYOffset > 1000) {
               setSticky(true);
          } else {
               setSticky(false);
          }
     }
     useEffect(() => {
          window.addEventListener("scroll", isSticky);
          return () => {
               window.removeEventListener("scroll", isSticky);
          };
     }, []);
     useEffect(() => {
          isSticky();
     }, []);

     const leftNav = nav.slice(0, 1);
     const rightNav = nav.slice(1, 2);
     return (
          <>
               <div className="bg-black w-full min-h-8 text-white hidden md:block">
                    <Container className="flex justify-between items-center h-full text-[16px] font-semibold">
                         <a target="_blank" className="flex gap-2" href="tel:+998712000667 ">
                              <Image src={pin} alt="" width={20} height={20} className="" />
                              <p>+99871 200 06 67</p>
                         </a>
                         <a
                              target="_blank"
                              href="https://yandex.uz/maps/10335/tashkent/?ll=69.250114%2C41.266898&mode=poi&poi%5Bpoint%5D=69.250063%2C41.266885&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D175879305133&z=21"
                              className="flex gap-2"
                         >
                              <Image src={phone} alt="" width={20} height={20} className="" />
                              <p>г. Ташкент, Малая кольцевая дорога, 10</p>
                         </a>
                         <div className="hidden md:block">
                              <LangSwitcher locale={locale} />
                         </div>
                    </Container>
               </div>
               <header className={`left-0 ${sticky ? "top-0" : "top-0 md:top-8"} w-full z-50 h-[80px] text-white ${sticky ? "fixed" : "absolute"}`}>
                    <div className="bg-black opacity-25 w-full h-full absolute left-0 top-0 -z-10"></div>
                    <Container className="h-full flex justify-between items-center">
                         <nav className="hidden md:block font-semibold">
                              <ul className="flex gap-6 lg:gap-8">
                                   {leftNav.map((el) => (
                                        <li key={el.id} className="relative z-10">
                                             {el.isExternal ? (
                                                  <a target="_blank" href={el.href}>
                                                       <span className="text-[16px]">{el.title}</span>
                                                  </a>
                                             ) : (
                                                  <Link href={`/${locale}${el.href}`}>
                                                       <span className="text-[16px]">{el.title}</span>
                                                  </Link>
                                             )}
                                        </li>
                                   ))}
                              </ul>
                         </nav>
                         <Link className="aspect-[300/100] max-w-[120px] w-full h-auto md:max-w-[200px]" href={`/${locale}`}>
                              <Image src={logo} alt="Midea" width={300} height={100} className="w-full h-full object-contain" />
                         </Link>
                         <nav className="gap-10 items-center lg:gap-[120px] hidden md:flex font-semibold">
                              <ul className="flex gap-6 lg:gap-8">
                                   {rightNav.map((el) => (
                                        <li key={el.id} className="relative z-10">
                                             {el.isExternal ? (
                                                  <a target="_blank" href={el.href}>
                                                       <span className="text-[16px]">{el.title}</span>
                                                  </a>
                                             ) : (
                                                  <Link href={`/${locale}${el.href}`}>
                                                       <span className="text-[16px]">{el.title}</span>
                                                  </Link>
                                             )}
                                        </li>
                                   ))}
                              </ul>
                         </nav>
                         <Burger locale={locale} nav={nav} />
                    </Container>
               </header>
          </>
     );
};

export default Header;
