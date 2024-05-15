import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper h-full rounded-lg"
      >
        <SwiperSlide><img className='w-full h-full object-cover' src="https://i.ibb.co/QPgbLRn/header1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-cover' src="https://i.ibb.co/dg0zy7K/header2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-cover' src="https://i.ibb.co/JrQhdtT/header3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-cover' src="https://i.ibb.co/7X6f9yb/header4.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
