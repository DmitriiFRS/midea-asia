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
import SkeletonList from "./SkeletonList";
import { useProductCatalogContext } from "@/context/ProductCatalogContext";

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

const ProductList: React.FC<Props> = ({ locale, categorySlug, dollarValue }) => {
     const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
     const [products, setProducts] = useState<Product[]>([]);
     const [isLoading, setIsLoading] = useState(true);
     const [pageCount, setPageCount] = useState(1);
     const { brand } = useProductCatalogContext();
     useEffect(() => {
          const getFilteredProducts = async function () {
               setIsLoading(true);
               const response = await getProducts({ locale: locale, limit: 10, page: page, brandValue: brand, categoryValue: categorySlug });
               const pagination = response.meta.pagination as ProductsPagination;
               setProducts(response.data);
               setPageCount(pagination.pageCount);
               setIsLoading(false);
          };
          getFilteredProducts();
     }, [page, brand]);
     function handlePageChange(pageValue: number, scroll = true) {
          if (page !== pageValue) {
               setPage(pageValue);
          }
     }
     return isLoading ? (
          <SkeletonList />
     ) : (
          <>
               <div className="mt-10 grid items-stretch grid-cols-1 gap-x-5 gap-y-10 h-full pb-20 xs:grid-cols-2 lmd:grid-cols-3 xl:grid-cols-4">
                    <ProductListForm locale={locale} />
                    {products.length ? (
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
                                        className="group flex flex-col h-auto w-full aspect-square rounded-lg border bg-white/20 border-gray-300 shadow-md group-hover:bg-[#e3e3e3] duration-500 p-5"
                                   >
                                        <Image
                                             src={strapiUrl + el.previewImage.url}
                                             alt="alt"
                                             width={300}
                                             height={300}
                                             className="w-full max-w-[200px] h-auto aspect-square mx-auto group-hover:scale-105 duration-500 object-contain"
                                        />
                                        <div className="flex flex-col gap-3 mt-3 flex-[1_1_auto] justify-end">
                                             {(priceFrom || price) && (
                                                  <div className="font-semibold text-blue text-[16px] sm:text-[18px]">
                                                       {priceFrom ? `Цена от ${priceFrom.toLocaleString()} Сум` : `Цена: ${price?.toLocaleString()} Сум`}
                                                  </div>
                                             )}
                                             <div className="flex-[1_1_auto] text-[14px] sm:text-[16px] font-medium">{el.name}</div>
                                             <div className="opacity-60 font-medium text-[14px]">Бренд: {el.brand.title}</div>
                                             <CommonButton className="p-[10px_!important] min-w-full border border-black group-hover:bg-transparent duration-500 group-hover:text-black text-[14px] sm:text-[16px]">
                                                  Подробнее
                                             </CommonButton>
                                        </div>
                                   </Link>
                              );
                         })
                    ) : (
                         <div className="text-[16px] md:text-[20px] font-medium">Не найдено товаров с выбранными параметрами</div>
                    )}
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
