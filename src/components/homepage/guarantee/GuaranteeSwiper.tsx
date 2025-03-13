"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import slide1 from "@img/home/card1.webp";
import slide2 from "@img/home/card2.webp";
import slide3 from "@img/home/card3.webp";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { forwardRef } from "react";

interface Props {
     locale: string;
}

const GuaranteeSwiper = forwardRef<SwiperRef, Props>(({ locale }, ref) => {
     const slides = [
          {
               id: 9,
               img: slide1,
          },
          {
               id: 10,
               img: slide2,
          },
          {
               id: 11,
               img: slide3,
          },
     ];

     return (
          <div className="flex-[0_1_60%] overflow-hidden relative">
               <Swiper
                    ref={ref}
                    className="w-full h-full"
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    modules={[Pagination, EffectFade, Autoplay]}
                    pagination={{
                         clickable: true,
                         el: ".guarantee-swiper-pagination",
                         bulletClass: "guarantee-swiper-pagination-bullet",
                         bulletActiveClass: "guarantee-swiper-pagination-bullet-active",
                    }}
                    effect="fade"
               >
                    {slides.map((el) => (
                         <SwiperSlide key={el.id}>
                              <div className="w-full h-auto aspect-square">
                                   <Image src={el.img} alt="slide" width={1030} height={1030} className="w-full h-full object-cover" />
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
               <div className="guarantee-swiper-pagination absolute bottom-4 left-0 w-full h-4 z-10 flex gap-4 justify-center"></div>
          </div>
     );
});

GuaranteeSwiper.displayName = "GuaranteeSwiper";

export default GuaranteeSwiper;
