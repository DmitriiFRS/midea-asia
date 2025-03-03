"use client";

import { VariationInterface } from "@/interfaces/products.interface";
import { i } from "motion/react-client";

interface Props {
     locale: string;
     models: VariationInterface[];
}

const ProductModels: React.FC<Props> = ({ locale, models }) => {
     return (
          <div className="grid grid-cols-2 gap-5 mt-5">
               {models &&
                    models.map((el) => {
                         return (
                              <div key={el.id} className="flex justify-between items-center gap-10 bg-white h-[80px] px-[10px] rounded-xl">
                                   <p className="leading-130% text-[16px] font-medium">{el.variation}:</p>
                                   <p className="leading-130% text-[16px] font-medium">{el.value}</p>
                              </div>
                         );
                    })}
          </div>
     );
};

export default ProductModels;
