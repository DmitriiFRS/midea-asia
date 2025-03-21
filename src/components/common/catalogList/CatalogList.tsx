import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Container from "../container/Container";
import { Catalog } from "@/interfaces/catalog.interface";

interface Props {
     locale: string;
     items: Catalog[];
}

const CatalogList: React.FC<Props> = ({ locale, items }) => {
     return (
          <section className="my-20">
               <div className="flex flex-col gap-20">
                    {items.map((el) => {
                         return (
                              <div key={el.id}>
                                   <h2 className="ml-5 text-[24px] opacity-50 md:text-[30px]">{el.title}</h2>
                                   <span className="mt-5 w-full h-[1px] bg-slate-600 block opacity-20"></span>
                                   <ul className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
                                        {el.list.map((item) => {
                                             return (
                                                  <li className="" key={item.id}>
                                                       <Link href={`/${locale}${item.href}`}>
                                                            <Image
                                                                 src={item.image}
                                                                 alt={item.title}
                                                                 width={1000}
                                                                 height={1000}
                                                                 className="h-auto aspect-square w-full object-cover rounded-[20px] bg-[#f5f5f5]"
                                                            />
                                                            <div className="text-center mt-3 text-[16px] font-medium lg:text-[20px]">{item.title}</div>
                                                       </Link>
                                                  </li>
                                             );
                                        })}
                                   </ul>
                              </div>
                         );
                    })}
               </div>
          </section>
     );
};

export default CatalogList;
