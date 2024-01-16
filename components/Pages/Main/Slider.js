"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const SliderComponent = () => {
  SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
  const sliderOptions = {
    slidesPerView: "auto",
    // pagination: true,
    // navigation: true,
    loop: true,
    speed: 2500,
    autoplay: {
      delay: 2500,
      // disableOnInteraction: false,
    },
    // Uncomment autoply option then you can see the swiper play automatically
    // you can override setting options pass settings props to this component
  };

  const sliderOptions2 = {
    slidesPerView: "auto",
    // pagination: true,
    // navigation: true,
    loop: true,
    speed: 2500,
    autoplay: {
      delay: 2500,
      //  disableOnInteraction: false,
    },
    // Uncomment autoply option then you can see the swiper play automatically
    // you can override setting options pass settings props to this component
  };
  const items = [1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="pt-[40px] w-full flex flex-col gap-y-[30px]">
      <Swiper className="w-full py-4" {...sliderOptions}>
        {items.map((item, i) => {
          return (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center mx-[10px] cursor-grabbing w-[390px] md:w-[487px] h-[150px] bg-[#FAFAFA] border-[#FFFFFF]
         rounded-[20px] outline-none border-[0.5px] 
         drop-shadow-[0px_3px_8px_rgba(0,0,0,0.10)] "
            >
              <div className="hidden font-sf_pro_rounded_regular text-[30px] leading-[40px] text-[#E6E6E6] ">
                Slider Photo Area
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper {...sliderOptions2} className="py-4 w-full ">
        {items.map((item, i) => {
          return (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center mx-[10px] cursor-grabbing w-[285px] h-[400px] bg-[#FAFAFA] border-[#FFFFFF]
         rounded-[20px] outline-none border-[0.5px] 
         drop-shadow-[0px_3px_8px_rgba(0,0,0,0.10)] "
            >
              <div className="hidden text-[30px] font-sf_pro_rounded_regular [writing-mode:vertical-lr]  leading-[40px] text-[#E6E6E6] ">
                Slider Photo Area
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="py-4 flex items-center justify-center cursor-grabbing w-full h-[608px] bg-[#FAFAFA] border-[#FFFFFF]
         rounded-[20px] outline-none border-[0.5px] 
         drop-shadow-[0px_3px_8px_rgba(0,0,0,0.10)] "
      >
        <div className="hidden text-[30px] leading-[40px] text-[#E6E6E6] ">
          Photo Area
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-y-[10px] justify-between pb-[20px]">
        <div
          className="py-4 flex items-center justify-center cursor-grabbing aspect-square md:aspect-auto w-full h-full md:w-[1000px] md:h-[608px] bg-[#FAFAFA] border-[#FFFFFF]
         rounded-[20px] outline-none border-[0.5px] 
         drop-shadow-[0px_3px_8px_rgba(0,0,0,0.10)] "
        >
          <div className="hidden font-sf_pro_rounded_regular text-[30px] leading-[40px] text-[#E6E6E6] ">
            Photo Area
          </div>
        </div>
        <div
          className="py-4 flex items-center justify-center cursor-grabbing aspect-square md:aspect-auto w-full h-full md:w-[500px] md:h-[608px] bg-[#FAFAFA] border-[#FFFFFF]
         rounded-[20px] outline-none border-[0.5px] 
         drop-shadow-[0px_3px_8px_rgba(0,0,0,0.10)] "
        >
          <div className="hidden font-sf_pro_rounded_regular text-[30px] leading-[40px] text-[#E6E6E6] ">
            Photo Area
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderComponent;
