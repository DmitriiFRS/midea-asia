"use client";

import { useProductContext } from "@/context/ProductContext";
import { VariationInterface } from "@/interfaces/products.interface";
import { useContext, useEffect } from "react";

interface Props {
     locale: string;
     models: VariationInterface[];
}

const ProductModels: React.FC<Props> = ({ locale, models }) => {
     const { currentModel, setCurrentModel } = useProductContext();
     useEffect(() => {
          setCurrentModel(models[0]);
     }, []);
     return (
          <div className="grid grid-cols-2 gap-5 mt-5">
               {models &&
                    models.map((el) => {
                         return (
                              <button
                                   onClick={() => setCurrentModel(el)}
                                   key={el.id}
                                   className={`flex justify-between items-center gap-10 h-[80px] px-[10px] rounded-xl ${
                                        currentModel?.id === el.id ? "bg-black text-white" : "bg-white text-black"
                                   }`}
                              >
                                   <p className="leading-130% text-[16px] font-medium">{el.variation}:</p>
                                   <p className="leading-130% text-[16px] font-medium">{el.value}</p>
                              </button>
                         );
                    })}
          </div>
     );
};

export default ProductModels;
