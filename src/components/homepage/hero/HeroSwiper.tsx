"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "@img/home/temp.jpeg";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface Props {
  locale: string;
}

const HeroSwiper: React.FC<Props> = ({ locale }) => {
  const slides = [img, img, img];
  return (
    <div className="absolute top-0 left-0 w-full h-screen    -z-20">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} loop={true} speed={1000}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <Image src={slide} alt="slide" width={1980} height={1020} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
