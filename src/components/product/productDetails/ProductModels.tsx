"use client";
//протестить через реф свайпера баг со свайпами
import { useProductContext } from "@/context/ProductContext";
import { VariationInterface } from "@/interfaces/products.interface";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
interface Props {
     locale: string;
     models: VariationInterface[];
}

const ProductModels: React.FC<Props> = ({ locale, models }) => {
     const { currentModel, setCurrentModel } = useProductContext();
     const [isCLient, setIsClient] = useState(false);
     useEffect(() => {
          setCurrentModel(models[0]);
          setIsClient(true);
     }, []);
     return models && models.length > 8 ? (
          isCLient && <ModelsSlider models={models} />
     ) : (
          <div className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 lg:gap-5">
               {models.map((el) => {
                    return (
                         <button
                              onClick={() => setCurrentModel(el)}
                              key={el.id}
                              className={`flex justify-between items-center gap-10 h-[60px] px-[10px] rounded-xl ${
                                   currentModel?.id === el.id ? "bg-black text-white" : "bg-white text-black"
                              } lg:h-[60px]`}
                         >
                              <p className="leading-130% text-[14px] font-medium lg:text-[16px]">{el.variation}:</p>
                              <p className="leading-130% text-[14px] font-medium lg:text-[16px]">{el.value}</p>
                         </button>
                    );
               })}
          </div>
     );
};

const ModelsSlider = ({ models }: { models: VariationInterface[] }) => {
     const { currentModel, setCurrentModel } = useProductContext();
     //протестить через реф свайпера баг со свайпами
     return (
          <div className="mt-5 relative p-[0_20px] md:p-[0_20px_0_0]">
               <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
                    <button className="product-swiper-button-prev relative right-4 w-10 h-10 md:right-7 lg:right-10">
                         <GrFormPrevious className="w-full h-full" />
                    </button>
                    <button className="product-swiper-button-next relative left-3 w-10 h-10 lg:left-5">
                         <GrFormNext className="w-full h-full" />
                    </button>
               </div>
               <Swiper
                    modules={[Grid, Navigation, Pagination]}
                    navigation={{
                         nextEl: ".product-swiper-button-next",
                         prevEl: ".product-swiper-button-prev",
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    grid={{ rows: 4, fill: "row" }}
                    slidesPerGroup={1}
                    breakpoints={{
                         480: {
                              slidesPerView: 2,
                         },
                    }}
                    className="w-full models-swiper mt-0"
               >
                    {models.map((el) => {
                         return (
                              <SwiperSlide key={el.id} className="models-swiper-slide w-full">
                                   <button
                                        onClick={() => setCurrentModel(el)}
                                        key={el.id}
                                        className={`w-full flex justify-between items-center gap-3 xl:gap-10 h-[60px] px-[10px] rounded-xl ${
                                             currentModel?.id === el.id ? "bg-black text-white" : "bg-white text-black"
                                        } lg:h-[60px]`}
                                   >
                                        <p className="leading-130% text-[14px] font-medium lg:text-[16px]">{el.variation}:</p>
                                        <p className="leading-130% text-[14px] font-medium lg:text-[16px] line-clamp-2">{el.value}</p>
                                   </button>
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </div>
     );
};

export default ProductModels;
