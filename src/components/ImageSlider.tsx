'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

// 스와이퍼 스타일 임포트
import 'swiper/css';
import 'swiper/css/pagination';

// 커스텀 스타일
import './slider.css';

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-48 w-full">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);
        }}
        className="h-full w-full rounded-t-lg swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`${title} 이미지 ${index + 1}`}
                fill
                className="object-cover"
                unoptimized={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-xs mt-1">{activeIndex + 1} / {images.length}</p>
      </div>
    </div>
  );
}
