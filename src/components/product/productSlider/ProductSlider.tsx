"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, FreeMode, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import sample from "@img/home/card1.webp";
import { strapiUrl } from "@/utils/consts";

interface Props {
     images: {
          url: string;
     }[];
}

const ProductSlider = ({ images }: Props) => {
     const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
     return (
          images && (
               <div className="flex flex-col gap-6">
                    <div className="bg-white w-full h-auto aspect-square">
                         <Swiper
                              className="w-full h-full"
                              modules={[Thumbs, A11y]}
                              thumbs={{
                                   swiper: thumbsSwiper,
                                   thumbsContainerClass: "product-swiper-thumbs",
                              }}
                         >
                              {images.map((el, index) => (
                                   <SwiperSlide key={index}>
                                        <div className="flex items-center justify-center w-full h-full relative">
                                             <Image src={strapiUrl + el.url} alt="slide" width={459} height={481} className=" w-full h-full object-contain" />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
                    <div className="">
                         <Swiper grabCursor onSwiper={setThumbsSwiper} slidesPerView={4} spaceBetween={20} freeMode={true} modules={[FreeMode, Thumbs]} className="h-full">
                              {images.map((el, index) => (
                                   <SwiperSlide key={index}>
                                        <div className="flex items-center justify-center bg-white h-auto w-auto aspect-square rounded-[5px]">
                                             <Image src={strapiUrl + el.url} alt="slide" width={459} height={481} className="w-full h-full object-contain" />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </div>
          )
     );
};

export default ProductSlider;
