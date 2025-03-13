"use client";

import { useRef } from "react";
import { NewsInterface } from "@/interfaces/news.interface";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { strapiUrl } from "@/utils/consts";
import CommonButton2 from "@/components/common/commonButton/CommonButton2";
import ReactMarkdown from "react-markdown";

interface Props {
     locale: string;
     news: NewsInterface[];
}

const GuaranteeMain: React.FC<Props> = ({ locale, news }) => {
     const swiperRef1 = useRef<SwiperRef>(null);
     const swiperRef2 = useRef<SwiperRef>(null);
     const handleSlideChange = (swiper: SwiperClass) => {
          if (swiperRef1.current && swiperRef2.current) {
               swiperRef1.current.swiper.slideTo(swiper.activeIndex);
               setTimeout(() => {
                    swiperRef2.current?.swiper.slideTo(swiper.activeIndex);
               }, 200);
          }
     };
     return (
          <div className="grid grid-cols-2 gap-10 max-w-full">
               <div className="flex-[0_1_60%] overflow-hidden relative">
                    <Swiper
                         ref={swiperRef1}
                         onSwiper={(swiper) => (swiperRef1.current = { swiper })}
                         onSlideChange={handleSlideChange}
                         className="w-full h-full"
                         slidesPerView={1}
                         modules={[Pagination, EffectFade]}
                         pagination={{
                              clickable: true,
                              el: ".guarantee-swiper-pagination",
                              bulletClass: "guarantee-swiper-pagination-bullet",
                              bulletActiveClass: "guarantee-swiper-pagination-bullet-active",
                         }}
                    >
                         {news.map((el) => (
                              <SwiperSlide key={el.id}>
                                   <div className="w-full h-auto aspect-square">
                                        <Image src={strapiUrl + el.image?.url} alt="slide" width={1030} height={1030} className="w-full h-full object-cover" />
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
                    <div className="guarantee-swiper-pagination absolute bottom-4 left-0 w-full h-4 z-10 flex gap-4 justify-center"></div>
               </div>

               <div className="flex-[0_1_40%] my-[30px] flex flex-col justify-between">
                    <Swiper
                         navigation={false}
                         pagination={false}
                         ref={swiperRef2}
                         onSwiper={(swiper) => (swiperRef2.current = { swiper })}
                         onSlideChange={handleSlideChange}
                         className="w-full"
                    >
                         {news.map((el) => (
                              <SwiperSlide key={el.id}>
                                   <h2 className="text-[36px] text-[#3b3b3b] font-semibold leading-120%">{el.title}</h2>
                                   <div className="mt-14 flex flex-col gap-5 text-[20px] leading-120% flex-[1_1_auto]">
                                        <ReactMarkdown>{el.preview_description}</ReactMarkdown>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
                    <CommonButton2>Смотреть все новости</CommonButton2>
               </div>
          </div>
     );
};

export default GuaranteeMain;
