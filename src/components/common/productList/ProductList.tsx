import alba from "@/../public/images/home/alba.webp";
import Image from "next/image";
import ProductListForm from "./ProductListForm";
import bg from "@/../public/images/catalog/winter-bg.webp";
import Link from "next/link";

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
          <div className="mt-10 grid grid-cols-4 gap-x-5 gap-y-10 h-full pb-20">
               <Image src={bg} alt="" width={1920} height={1080} className="fixed left-0 top-0 w-screen h-screen object-cover -z-10 opacity-15" />
               <ProductListForm locale={locale} />
               {products.map((el) => {
                    return (
                         <Link href={"/"} key={el.id} className="group">
                              <div className="w-full h-auto aspect-square rounded-lg  border bg-white/20 border-gray-300 shadow-md group-hover:bg-[#e3e3e3] duration-500">
                                   <Image src={el.image} alt="alt" width={300} height={300} className="w-full h-full group-hover:scale-105 duration-500" />
                              </div>
                              <div className="mt-5 flex justify-between px-2 font-medium">
                                   <div className="text-[16px]">Кондиционер {el.title}</div>
                                   <div>От {el.price} сум</div>
                              </div>
                         </Link>
                    );
               })}
          </div>
     );
};

export default ProductList;
