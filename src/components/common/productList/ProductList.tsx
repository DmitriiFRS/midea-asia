import alba from "@/../public/images/home/alba.webp";
import Image from "next/image";
import ProductListForm from "./ProductListForm";
import bg from "@/../public/images/catalog/winter-bg.webp";
import Link from "next/link";
import CommonButton from "../commonButton/CommonButton";

interface Props {
     locale: string;
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

const ProductList: React.FC<Props> = ({ locale }) => {
     return (
          <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-10 h-full pb-20 xl:grid-cols-4">
               <ProductListForm locale={locale} />
               {products.map((el) => {
                    return (
                         <Link
                              href={"/"}
                              key={el.id}
                              className="group block h-auto w-full aspect-square rounded-lg  border bg-white/20 border-gray-300 shadow-md group-hover:bg-[#e3e3e3] duration-500 p-5"
                         >
                              <Image src={el.image} alt="alt" width={300} height={300} className="w-full max-w-[200px] h-auto mx-auto group-hover:scale-105 duration-500" />
                              <div className="flex flex-col gap-3 mt-3 h-auto">
                                   <div className="font-semibold text-blue text-[18px]">От {el.price} Сум</div>
                                   <div className="flex-[1_1_auto] text-[16px] font-medium">Настенный кондиционер {el.title}</div>
                                   <div className="opacity-60 font-medium text-[14px]">Бренд: Midea</div>
                                   <CommonButton className="p-[10px_!important] border border-black group-hover:bg-transparent duration-500 group-hover:text-black">
                                        Подробнее
                                   </CommonButton>
                              </div>
                         </Link>
                    );
               })}
          </div>
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
