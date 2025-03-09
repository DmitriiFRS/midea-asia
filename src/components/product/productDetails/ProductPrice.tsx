"use client";

import { useProductContext } from "@/context/ProductContext";
import { Product } from "@/interfaces/products.interface";

interface Props {
     lng: string;
     product: Product;
     dollarValue: number;
}

const ProductPrice: React.FC<Props> = ({ lng, product, dollarValue }) => {
     const { currentModel, setCurrentModel } = useProductContext();
     return (
          currentModel &&
          (currentModel.price || product.price) && (
               <div className="mt-5 text-[28px] font-semibold lg:mt-10 lg:text-[35px]">
                    {product.variation ? (currentModel.price && currentModel.price * dollarValue)?.toLocaleString() + " Сум" : product.price + " Сум"}
               </div>
          )
     );
};

export default ProductPrice;
