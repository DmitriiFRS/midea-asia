"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {
  images: string[]; // Assuming images is an array of image URLs
};

const NewsPageSlider: React.FC<Props> = ({ images }) => {
  return <Swiper></Swiper>;
};

export default NewsPageSlider;
