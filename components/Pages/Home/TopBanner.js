"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "helpers/image";

const TopBanner = () => {
  const swiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
  };
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-5 p-0 md:p-5">
      <div className="lg:w-[30%] hidden flex-1 w-full shadow lg:flex items-start justify-center bg-white rounded-lg">
        categories
      </div>
      <div className="lg:w-[30%] flex-grow w-full shadow bg-transparent h-full gap-5 flex flex-col items-center justify-center">
        <Swiper
          className="rounded-lg aspect-[25/11] relative h-[70%] z-10 w-full h-full"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          {...swiperOptions}
        >
          <SwiperSlide className="relative rounded-lg  flex items-center justify-start">
            <Image
              className="w-full h-full"
              loading={"eager"}
              src={"/images/banner.png"}
              fill
              alt="banner"
            />
          </SwiperSlide>
          <SwiperSlide className="relative rounded-lg  flex items-center justify-start">
            <Image
              className="w-full h-full"
              loading={"eager"}
              src={"/images/banner.png"}
              fill
              alt="banner"
            />
          </SwiperSlide>
        </Swiper>
        <div className="h-[30%] w-full flex flex-col text-center bg-white rounded-lg shadow p-1 md:p-5 gap-y-5">
          <div className="lg:text-lg text-sm md:text-base text-gray-600">
            Fast Sourcing Of Products - In Wholesale
          </div>
          <div className="flex justify-between w-full">
            <input
              className="w-[30%] text-xs md:text-base border rounded-lg px-2 border-gray-200"
              placeholder="I'm looking for.."
            />
            <input
              className="w-[30%] text-xs md:text-base border rounded-lg px-2 border-gray-200"
              placeholder="Quantity"
            />
            <button className="w-[30%] text-xs md:text-base bg-[#FAFAFA] p-2 rounded-lg text-white flex items-center justify-center gap-x-1">
              Create RFQ
            </button>
          </div>
        </div>
      </div>
      <div className="relative shadow flex-1 lg:aspect-[25/11] lg:w-[30%] w-full flex justify-center bg-white rounded-lg">
        <div className="flex justify-between h-full w-full flex-row lg:flex-col py-1 px-2 gap-y-1">
          <div className="w-full relative lg:h-[30%] h-full aspect-video">
            <Image
              src="/images/banner2.png"
              className="relative rounded-lg px-1 object-cover"
              fill
              alt="ba2"
            />
            <div className="absolute text-xxs md:text-base font-medium  md:font-semibold flex flex-col gap-1 top-[20%] left-0 px-2 md:px-4">
              <div className=" text-white">Secure Payments</div>
              <div className="cursor-pointer hover:bg-[#f44336] duration-300 font-medium  md:font-semibold w-fit bg-black/30 rounded-lg text-white py-0 md:py-1 px-1 md:px-2">
                Know More
              </div>
            </div>
          </div>
          <div className="relative w-full lg:h-[30%] h-full aspect-video">
            <Image
              src="/images/ba3.png"
              className="relative rounded-lg px-1 object-cover"
              fill
              alt="ba2"
            />
            <div className="absolute text-xxs md:text-base font-medium  md:font-semibold flex flex-col gap-1 top-[20%] left-0 px-2 md:px-4">
              <div className=" text-white">Product Inspection</div>
              <div className="cursor-pointer hover:bg-[#f44336] duration-300 font-medium  md:font-semibold w-fit bg-black/30 rounded-lg text-white py-0 md:py-1 px-1 md:px-2">
                Know More
              </div>
            </div>
          </div>
          <div className="relative w-full lg:h-[30%] h-full aspect-video">
            <Image
              src="/images/ban4.png"
              className="relative rounded-lg px-1 object-cover"
              fill
              alt="ba2"
            />
            <div className="absolute text-xxs md:text-base font-medium  md:font-semibold flex flex-col gap-1 top-[20%] left-0 px-2 md:px-4">
              <div className=" text-white">Buyer Protection</div>
              <div className="cursor-pointer hover:bg-[#f44336] duration-300 font-medium  md:font-semibold w-fit bg-black/30 rounded-lg text-white py-0 md:py-1 px-1 md:px-2">
                Know More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;
