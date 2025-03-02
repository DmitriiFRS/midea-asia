"use client";

import alba from "@/../public/images/home/alba.webp";
import Image from "next/image";
import ProductListForm from "./ProductListForm";
import Link from "next/link";
import CommonButton from "../commonButton/CommonButton";
import { useEffect, useState } from "react";
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { getProducts } from "@/fetch/getProducts";
import { strapiUrl } from "@/utils/consts";
import { Product } from "@/interfaces/products.interface";
import { Pagination } from "@mui/material";

interface Props {
     locale: string;
     categorySlug: string;
     dollarValue: number;
}
export interface ProductsPagination {
     page: number;
     pageSize: number;
     pageCount: number;
     total: number;
}

const products = [
     {
          id: 0,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 1,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 2,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 3,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 4,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 5,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 6,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 7,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
     {
          id: 8,
          title: "Alba",
          price: "10000000",
          image: alba,
     },
];

const ProductList: React.FC<Props> = ({ locale, categorySlug, dollarValue }) => {
     const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
     const [brandValue, setBrandValue] = useQueryState("brand", parseAsString);
     const [products, setProducts] = useState<Product[]>([]);
     const [isLoading, setIsLoading] = useState(true);
     const [pageCount, setPageCount] = useState(1);
     useEffect(() => {
          const getFilteredProducts = async function () {
               setIsLoading(true);
               const response = await getProducts({ locale: locale, limit: 10, page: page, brandValue: brandValue, categoryValue: categorySlug });
               const pagination = response.meta.pagination as ProductsPagination;
               console.log(pagination);
               setProducts(response.data);
               setPageCount(pagination.pageCount);
               setIsLoading(false);
          };
          getFilteredProducts();
     }, [page]);
     function handlePageChange(pageValue: number, scroll = true) {
          if (page !== pageValue) {
               setPage(pageValue);
          }
     }
     return (
          <>
               <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-10 h-full pb-20 xl:grid-cols-4">
                    <ProductListForm locale={locale} />
                    {products.length &&
                         products.map((el) => {
                              let price = null;
                              let priceFrom = null;
                              if (el.variation.length) {
                                   el.variation.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
                                   priceFrom = el.variation[0].price ? el.variation[0].price * dollarValue : null;
                              } else {
                                   price = el.price ? el.price * dollarValue : null;
                              }
                              return (
                                   <Link
                                        href={`/${locale}/catalog/${categorySlug}/${el.slug}`}
                                        key={el.id}
                                        className="group block h-auto w-full aspect-square rounded-lg  border bg-white/20 border-gray-300 shadow-md group-hover:bg-[#e3e3e3] duration-500 p-5"
                                   >
                                        <Image
                                             src={strapiUrl + el.previewImage.url}
                                             alt="alt"
                                             width={300}
                                             height={300}
                                             className="w-full max-w-[200px] h-auto aspect-square mx-auto group-hover:scale-105 duration-500 object-contain"
                                        />
                                        <div className="flex flex-col gap-3 mt-3 h-auto">
                                             <div className="font-semibold text-blue text-[18px]">
                                                  {priceFrom ? `Цена от ${priceFrom.toLocaleString()} Сум` : `Цена: ${price?.toLocaleString()} Сум`}
                                             </div>
                                             <div className="flex-[1_1_auto] text-[16px] font-medium">{el.name}</div>
                                             <div className="opacity-60 font-medium text-[14px]">Бренд: {el.brand.title}</div>
                                             <CommonButton className="p-[10px_!important] min-w-full border border-black group-hover:bg-transparent duration-500 group-hover:text-black">
                                                  Подробнее
                                             </CommonButton>
                                        </div>
                                   </Link>
                              );
                         })}
               </div>
               {pageCount > 1 && (
                    <Pagination
                         count={pageCount}
                         defaultPage={Number(page)}
                         siblingCount={1}
                         boundaryCount={1}
                         page={Number(page)}
                         onChange={(e, page) => handlePageChange(page, false)}
                         hideNextButton
                         hidePrevButton
                    />
               )}
          </>
     );
};

export default ProductList;
/*
<div className="w-full h-auto aspect-square rounded-lg  border bg-white/20 border-gray-300 shadow-md group-hover:bg-[#e3e3e3] duration-500 p-5">
                                   <Image src={el.image} alt="alt" width={300} height={300} className="w-full h-full group-hover:scale-105 duration-500" />
                                   <div className="mt-5 flex justify-between px-2 font-medium">
                                        <div className="text-[16px]">Кондиционер {el.title}</div>
                                        <div>От {el.price} сум</div>
                                   </div>
                              </div>
*/
