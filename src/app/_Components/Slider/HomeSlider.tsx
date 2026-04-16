"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function HomeSlider({
  height,
  slidesPerView,
  pageList,
}: {
  height: number;
  slidesPerView: number;
  pageList: any[];
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      loop
      slidesPerView={slidesPerView}
      navigation
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className} duration-500 size-3!"></span>`;
        },
        bulletActiveClass: "bg-white! opacity-100! w-6! rounded-3xl!",
      }}
    >
      {pageList?.map((page, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-100">

            {/* الصورة */}
            <Image
              src={page?.image}
              alt="slider"
              fill
              className="object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-green-500/60"></div>

            {/* النص */}
            <div className="absolute inset-0 flex flex-col justify-center px-20 text-white">
              <h1 className="text-3xl font-bold  max-w-90">
                {page?.title}
              </h1>

              <p className="my-7">
                {page?.description}
              </p>

              <div className="flex gap-4">
                <Link href={`/shop`} className="bg-white cursor-pointer hover:scale-110 duration-300 min-w-35 text-center text-emerald-600 px-6 py-2 rounded">
                  {page?.btn?.btnadd}
                </Link>

                <Link href={`/info`} className="border border-white cursor-pointer hover:scale-110 duration-300 min-w-35 text-center px-6 py-2 rounded">
                  {page?.btn?.btninfo}
                </Link>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
