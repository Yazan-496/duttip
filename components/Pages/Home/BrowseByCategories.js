"use client";
import Link from "helpers/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "helpers/image";

const BrowseByCategories = () => {
  const swiperOptions = {
    spaceBetween: 10,
    // slidesPerView: 1.5,
    // breakpoints: {
    //     640: {slidesPerView: 2.5},
    //     1024: {slidesPerView: 5.5},
    // }
  };
  return (
    <div className="w-full h-full flex flex-col gap-y-4 px-4 py-6 bg-white rounded-lg shadow-xl">
      <div className="flex text-gray-700 text-sm md:text-lg lg:text-xl justify-between items-center">
        <div className="flex justify-between items-center gap-x-1">
          <Image
            width={20}
            height={20}
            className="relative object-contain"
            src="/images/layout-grid-fill-svg.png"
            alt="grid"
          />
          <div className="font-semibold">Browse By Categories</div>
        </div>
        <hr className="md:w-[50%] w-0 h-[0.05rem] bg-gray-200 border-0 rounded" />
        <Link
          href={"/main"}
          className="font-semibold underline hover:text-red-500"
        >
          See All Categories
        </Link>
      </div>
      <Swiper {...swiperOptions} className="w-full">
        <SwiperSlide
          className="cursor-pointer aspect-[4/3] w-2/3 md:w-2/5 lg:w-2/12 rounded-lg
                    hover:shadow hover:scale-[0.97]"
        >
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/mobile-phones-tablets.png"}
            fill
            alt="category"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer aspect-[4/3] w-2/3 md:w-2/5 lg:w-2/12 rounded-lg
                    hover:shadow hover:scale-[0.97]"
        >
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/mobile-phones-tablets.png"}
            fill
            alt="category"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer aspect-[4/3] w-2/3 md:w-2/5 lg:w-2/12 rounded-lg
                    hover:shadow hover:scale-[0.97]"
        >
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/mobile-phones-tablets.png"}
            fill
            alt="category"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer aspect-[4/3] w-2/3 md:w-2/5 lg:w-2/12 rounded-lg
                    hover:shadow hover:scale-[0.97]"
        >
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/mobile-phones-tablets.png"}
            fill
            alt="category"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer aspect-[4/3] w-2/3 md:w-2/5 lg:w-2/12 rounded-lg
                    hover:shadow hover:scale-[0.97]"
        >
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/mobile-phones-tablets.png"}
            fill
            alt="category"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer aspect-[4/3] w-2/3 md:w-2/5 lg:w-2/12 rounded-lg
                    hover:shadow hover:scale-[0.97]"
        >
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/mobile-phones-tablets.png"}
            fill
            alt="category"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer aspect-[4/3] w-2/3 md:w-2/5 lg:w-2/12 rounded-lg
                    hover:shadow hover:scale-[0.97]"
        >
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/mobile-phones-tablets.png"}
            fill
            alt="category"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrowseByCategories;
