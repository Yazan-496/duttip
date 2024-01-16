"use client";
import Link from "helpers/Link";
import Image from "helpers/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import electronicsLight from "public/svg/electronicsLight.svg";
import electronics from "public/svg/electronics.svg";
const categories = [
  {
    id: 1,
    name: "Laptops",
    products: [
      { id: 1, image: "/images/apple1.jpg" },
      { id: 3, image: "/images/apple3.png" },
      { id: 2, image: "/images/apple2.jpeg" },
      { id: 4, image: "/images/apple4.png" },
    ],
  },
  {
    id: 2,
    name: "Laptops",
    products: [
      { id: 1, image: "/images/apple1.jpg" },
      { id: 3, image: "/images/apple3.png" },
      { id: 2, image: "/images/apple2.jpeg" },
      { id: 4, image: "/images/apple4.png" },
    ],
  },
  {
    id: 3,
    name: "Laptops",
    products: [
      { id: 1, image: "/images/apple1.jpg" },
      { id: 3, image: "/images/apple3.png" },
      { id: 2, image: "/images/apple2.jpeg" },
      { id: 4, image: "/images/apple4.png" },
    ],
  },
  {
    id: 4,
    name: "Laptops",
    products: [
      { id: 1, image: "/images/apple1.jpg" },
      { id: 3, image: "/images/apple3.png" },
      { id: 2, image: "/images/apple2.jpeg" },
      { id: 4, image: "/images/apple4.png" },
    ],
  },
  ,
  {
    id: 5,
    name: "Laptops",
    products: [
      { id: 1, image: "/images/apple1.jpg" },
      { id: 3, image: "/images/apple3.png" },
      { id: 2, image: "/images/apple2.jpeg" },
      { id: 4, image: "/images/apple4.png" },
    ],
  },
  ,
  {
    id: 6,
    name: "Laptops",
    products: [
      { id: 1, image: "/images/apple1.jpg" },
      { id: 3, image: "/images/apple3.png" },
      { id: 2, image: "/images/apple2.jpeg" },
      { id: 4, image: "/images/apple4.png" },
    ],
  },
];

const news = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];
const CategoriesSlider = () => {
  SwiperCore.use([Autoplay]);
  const sliderOptions = {
    slidesPerView: "auto",
    // pagination: true,
    // navigation: true,
    loop: true,
    spaceBetween: "0px",
    speed: 2500,
    autoplay: {
      delay: 2500,
      // disableOnInteraction: true,
    },
  };
  return (
    <div className="px-[13px] pt-[60px] rounded-[20px] justify-center items-center flex flex-col ">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-x-2">
          <Image src={electronics} width={30} height={30} alt="m" />
          <div className="font-sf_pro_rounded_regular text-[20px] leading-[27px] text-[#686868] ">
            Electronics
          </div>
        </div>
        <Link
          href="/"
          className="font-sf_pro_rounded_regular text-[#2780E8] leading-[21px] text-[16px] underline"
        >
          VISIT CATEGORY
        </Link>
      </div>
      <div className="visible px-[15px] w-full rounded-[18px] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)] ">
        <Swiper
          {...sliderOptions}
          className="flex pb-[5px] cursor-grabbing pt-[27px] items-center justify-between w-full"
        >
          {categories?.map((category) => {
            return (
              <SwiperSlide
                key={category.id}
                className="w-[310px] md:w-[354px] mx-[10px] overflow-visible h-[140px] md:h-[165px] rounded-[18px] bg-[#FAFAFA]
                 drop-shadow-[0px_3px_7px_rgba(0,0,0,0.1)] "
              >
                <Link
                  href={"/store"}
                  className="flex w-full justify-start items-center"
                >
                  <div className=" flex p-[5px_0px_10px_10px] md:p-[10px_0px_20px_20px]">
                    <Image
                      src={electronicsLight}
                      width={25}
                      height={25}
                      alt="m"
                    />
                    <div className="font-sf_pro_rounded_regular pl-[10px] text-[16px] leading-[21px] text-[#686868] ">
                      LAPTOPS
                    </div>
                  </div>
                </Link>
                <div className="flex items-center justify-center space-x-[5px]">
                  {category?.products?.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="relative min-w-[70px] md:min-w-[80px] h-[70px] md:h-[80px]
             rounded-[20px] bg-[#FFFFFF] drop-shadow-[0px_3px_6px_rgba(0,0,0,0.1)] "
                      >
                        <Image
                          fill
                          sizes="(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 10vw"
                          src={product.image}
                          className="object-cover rounded-[20px]"
                          alt="s"
                        />
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex items-center overflow-auto justify-start w-full pt-[20px] ">
        {news?.map((neww) => (
          <div
            key={neww.id}
            className="min-w-[390px] md:min-w-[480px] mr-[20px] pl-[18px] h-[102px] bg-[#FAFAFA] border-[#FFFFFF] rounded-[20px] "
          >
            <div className="flex items-center justify-between w-full">
              <div className="text-[16px] pt-[8px] pb-[3px] font-sf_pro_rounded_regular leading-[21px] text-[#686868]">
                Main Text
              </div>
              <div className="bg-[#7E6EFC] w-[72px] h-[39px] text-[16px] font-sf_pro_rounded_medium leading-[21px] text-white rounded-[10px_20px_10px_20px] flex items-center justify-center ">
                New
              </div>
            </div>
            <div className="text-[14px] font-sf_pro_rounded_regular leading-[19px] text-[#959595]">
              Details Text
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoriesSlider;
