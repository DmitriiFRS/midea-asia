import alba from "@/../public/images/home/alba.webp";
import Image from "next/image";

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
          <div className="mt-10 grid grid-cols-4">
               <div className="w-full h-auto aspect-square col-start-4 row-start-1">Заявка</div>
               {products.map((el) => {
                    return (
                         <div className="w-full h-auto aspect-square" key={el.id}>
                              <Image src={el.image} alt="alt" width={300} height={300} className="w-full h-full" />
                         </div>
                    );
               })}
          </div>
     );
};

export default ProductList;
