"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";

type TBreadCrumbProps = {
     homeElement: ReactNode;
     separator: ReactNode;
     containerClasses?: string;
     listClasses?: string;
     activeClasses?: string;
     capitalizeLinks?: boolean;
     className?: string;
     categoryData?: {
          slug: string;
          name: string;
     };
     productData?: {
          slug: string;
          name: string;
     };
     newsData?: {
          slug: string;
          title: string;
     };
};

const NextBreadcrumb = ({ categoryData, productData, newsData, homeElement, separator, className, listClasses, capitalizeLinks }: TBreadCrumbProps) => {
     const locale = useLocale();
     const pathname = usePathname();
     const paths = usePathname();
     const segments = pathname.split("/");
     const localeInPath = ["ru", "uz", "en"].includes(segments[1]) ? segments[1] : "";
     const pathNames = paths.split("/").filter((path) => {
          if (path === "ru" || path === "uz" || path === "en") {
               return;
          }
          return path !== "filter" && path;
     });
     return (
          <div>
               <ul className={`flex ${className} gap-[3px] text-[#9ea0a6] font-medium leading-120 tracking-0.02 text-14 flex-wrap`}>
                    <li className={listClasses}>
                         <Link href={"/"}>{homeElement}</Link>
                    </li>
                    {pathNames.length > 0 && separator}
                    {pathNames.map((link, index) => {
                         const href = localeInPath ? `/${localeInPath}/${pathNames.slice(0, index + 1).join("/")}` : `/${pathNames.slice(0, index + 1).join("/")}`;
                         const itemClasses = paths === href ? "" : "";
                         let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
                         switch (true) {
                              case itemLink === "catalog":
                                   itemLink = "Каталог";
                                   break;
                              case itemLink === "chillers":
                                   itemLink = "Чиллеры";
                                   break;
                              case itemLink === "vrf":
                                   itemLink = "VRF-системы";
                                   break;
                              case itemLink === "fancoils":
                                   itemLink = "Фанкойлы";
                                   break;
                              case itemLink === "air-conditioners":
                                   itemLink = "Бытовые кондиционеры";
                                   break;
                              case itemLink === "heat-curtains":
                                   itemLink = "Тепловые завесы";
                                   break;
                              case itemLink === "cassette-air-conditioners":
                                   itemLink = "Кассетные кондиционеры";
                                   break;
                              case itemLink === "ducted-air-conditioners":
                                   itemLink = "Канальные кондиционеры";
                                   break;
                              case itemLink === "column-air-conditioners":
                                   itemLink = "Колонные кондиционеры";
                                   break;
                              case itemLink === "gas-boilers":
                                   itemLink = "Газовые котлы";
                                   break;
                              case itemLink === "recuperators":
                                   itemLink = "Рекуператоры";
                                   break;
                              case itemLink === "air-purifiers-humidifiers":
                                   itemLink = "Очистители-увлажнители воздуха";
                                   break;
                              case itemLink === "dehumidifiers":
                                   itemLink = "Осушители воздуха";
                                   break;
                              case itemLink === "news":
                                   itemLink = "Новости и статьи";
                                   break;
                              case categoryData?.slug === link:
                                   itemLink = categoryData?.name;
                                   break;
                              case productData?.slug === link:
                                   itemLink = productData?.name;
                                   break;
                              case newsData?.slug === link:
                                   itemLink = newsData?.title;
                                   break;
                         }
                         return (
                              <React.Fragment key={index}>
                                   <li className={`${itemClasses} ${pathNames.length - 1 === index ? "" : ""}`}>
                                        <Link href={href} className="">
                                             {itemLink}
                                        </Link>
                                   </li>
                                   {pathNames.length !== index + 1 && separator}
                              </React.Fragment>
                         );
                    })}
               </ul>
          </div>
     );
};

export default NextBreadcrumb;
