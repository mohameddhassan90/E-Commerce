"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import Image, { StaticImageData } from 'next/image';

export default function MySlider({onSelect,height,slidesPerView,pageList}:{onSelect?: (img: any) => void,height:number,slidesPerView:number,pageList:any[]}){
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      loop
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true ,renderBullet(index, className){
        return `<span class="${className} duration-500 size-3!"></span>`},bulletActiveClass:"bg-green-500! opacity-100! w-6! rounded-3xl!"
       }}
      onSlideChange={(swiper) => {
        const activeIndex = swiper.realIndex;
        const nextIndex = (activeIndex + 1) % pageList.length;

        const activeItem = pageList?.[nextIndex];
        if (onSelect) onSelect(activeItem);
      }}
      
    >
      
      {pageList?.map((img)=><SwiperSlide><Image key={img} width={500} height={height} className={`w-full object-cover`} src={img} alt="pic"/></SwiperSlide>)}
      
    </Swiper>
  );
};