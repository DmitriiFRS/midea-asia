"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import img from "@img/home/temp.jpeg";
import slide1 from "@img/home/card1.webp";
import slide2 from "@img/home/card2.webp";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { strapiUrl } from "@/utils/consts";
import { useEffect } from "react";

interface Props {
  locale: string;
  bannersData: {
    main_banners: {
      url: string;
    }[];
  };
}

const HeroSwiper: React.FC<Props> = ({ locale, bannersData }) => {
  const slides = [slide1, slide2];
  useEffect(() => {
    console.log("bannersData", bannersData);
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-20">
      <Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: 3000 }} loop={true} speed={2000} effect="fade">
        {bannersData
          ? bannersData.main_banners?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <Image src={strapiUrl + slide.url} alt="slide" width={1980} height={1020} className="w-full h-screen object-cover" />
                </div>
              </SwiperSlide>
            ))
          : slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <Image src={slide} alt="slide" width={1980} height={1020} className="w-full h-screen object-cover" />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
