"use client";

import Container from "../common/container/Container";
import Image from "next/image";
import logo from "@icons/common/ca-logo.webp";
import Link from "next/link";
import LangSwitcher from "../common/langSwitcher/LangSwitcher";
import { useEffect, useState } from "react";
import Burger from "./Burger";

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
          <header className={`left-0 top-0 w-full z-50 h-[80px] text-white ${sticky ? "fixed" : "absolute"}`}>
               <div className="bg-black opacity-25 w-full h-full absolute left-0 top-0 -z-10"></div>
               <Container className="h-full flex justify-between items-center">
                    <nav className="hidden md:block">
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
                    <div className="gap-10 items-center lg:gap-[120px] hidden md:flex">
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
                         <LangSwitcher locale={locale} />
                    </div>
                    <Burger locale={locale} nav={nav} />
               </Container>
          </header>
     );
};

export default Header;
