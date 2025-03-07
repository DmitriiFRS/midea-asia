"use client";

import { useEffect, useState } from "react";

interface Props {
     locale: string;
}

const ProductNavButtons: React.FC<Props> = ({ locale }) => {
     const [activeButton, setActiveButton] = useState<string>("productDescription");
     useEffect(() => {
          const handleChange = () => {
               const hash = window.location.hash.replace("#", "");
               if (hash) {
                    setActiveButton(hash);
               }
          };
          handleChange();
          window.addEventListener("hashchange", handleChange);
          return () => {
               window.removeEventListener("hashchange", handleChange);
          };
     }, []);

     return (
          <div className={`bg-slate-200 flex rounded-full justify-center w-max font-medium text-[14px] xs:text-[16px]`}>
               <button>
                    <a
                         href="#productDescription"
                         className={`block w-full  rounded-full text-black px-5 py-3 ${activeButton === "productDescription" ? "bg-black text-white" : ""}`}
                    >
                         Описание
                    </a>
               </button>
               <button>
                    <a href="#productParams" className={`block w-full rounded-full text-black px-5 py-3 ${activeButton === "productParams" ? "bg-black text-white" : ""}`}>
                         Технические характеристики
                    </a>
               </button>
          </div>
     );
};

export default ProductNavButtons;
