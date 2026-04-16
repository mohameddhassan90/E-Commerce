"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MySlider from "@/app/_Components/Slider/Slider";

export default function MainImageSlider({ data }: any) {
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (data?.imageCover) {
      setMainImage(data.imageCover);
    }
  }, [data]);

  const handleSelect = (img: any) => {
    const src = img?.url || img?.image || img;
    setMainImage(src);
  };

  return (
    <div className="image-content">
      <div className="main-image mb-4">
        {mainImage && (
          <Image
            width={500}
            height={500}
            className="w-full object-contain"
            src={mainImage}
            alt={data?.title || "product image"}
            priority
          />
        )}
      </div>

        <MySlider
        height={50}
        slidesPerView={1.5}
        pageList={data?.images || []}
        onSelect={handleSelect}
      />
    </div>
  );
}