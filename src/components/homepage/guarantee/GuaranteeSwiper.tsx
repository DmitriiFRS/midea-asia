"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import swiperImg from "@img/home/swiperimg.jpeg";
import Image from "next/image";
import "swiper/css";
import { EffectFade, Pagination } from "swiper/modules";

interface Props {
  locale: string;
}

const GuaranteeSwiper: React.FC<Props> = ({ locale }) => {
  const slides = [
    {
      id: 9,
      img: swiperImg,
    },
    {
      id: 10,
      img: swiperImg,
    },
    {
      id: 11,
      img: swiperImg,
    },
  ];
  return (
    <div className="flex-[0_1_60%] overflow-hidden relative">
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        loop={true}
        modules={[Pagination, EffectFade]}
        pagination={{
          clickable: true,
          el: ".guarantee-swiper-pagination",
          bulletClass: "guarantee-swiper-pagination-bullet",
          bulletActiveClass: "guarantee-swiper-pagination-bullet-active",
        }}
        effect="fade"
      >
        {slides.map((el, index) => {
          return (
            <SwiperSlide key={el.id}>
              <div className="w-full h-auto aspect-square">
                <Image src={el.img} alt="slide" width={1030} height={1030} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="guarantee-swiper-pagination absolute bottom-4 left-0 w-full h-4 z-10 flex gap-4 justify-center"></div>
    </div>
  );
};

export default GuaranteeSwiper;
