"use client";
import NavStore from "./NavStore";
import Index from "./BodyStore";
import { useEffect, useState } from "react";
import { _getCountries } from "../../../store/actions/auth";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../../../helpers/image";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

let cate = [
  {
    id: 1,
    name: "category1",
    sub: [
      {
        id: 1,
        name: "sub1ca1",
        sub: [
          {
            id: 1,
            name: "sub1sub1ca1",
            sub: [
              {
                id: 1,
                name: "1",
              },
              {
                id: 2,
                name: "2",
              },
              {
                id: 3,
                name: "3",
              },
            ],
          },
          {
            id: 2,
            name: "sub2sub1ca2",
          },
          {
            id: 3,
            name: "sub3sub1ca3",
          },
        ],
      },
      {
        id: 2,
        name: "sub2ca1",
      },
      {
        id: 3,
        name: "sub3ca1",
      },
    ],
  },
  {
    id: 2,
    name: "category2",
    sub: [
      {
        id: 1,
        name: "sub1ca1",
      },
      {
        id: 2,
        name: "sub2ca2",
      },
      {
        id: 3,
        name: "sub3ca3",
      },
    ],
  },
];
const images = [
  "/images/apple1.jpg",
  "/images/apple3.png",
  "/images/apple2.jpeg",
  "/images/apple4.png",
];

function CategoriesPage() {
  const [tab, setTab] = useState(0);
  const [countries, setCountries] = useState(0);
  useEffect(() => {
    _getCountries(
      (data) => {
        setCountries(data?.data);
      },
      () => {}
    );
  }, []);
  SwiperCore.use([Autoplay]);
  const sliderOptions = {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: "0px",
    speed: 2500,
    autoplay: {
      delay: 2500,
    },
  };
  return (
    <div className="bg-[#F5F5F5] m-0 md:m-5 p-0 md:p-5 flex flex-col w-full gap-5">
      <Swiper
        {...sliderOptions}
        className="flex pb-[5px] cursor-grabbing pt-[27px] items-center justify-between w-full"
      >
        {images?.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
              className="shadow-[1px_1px_10px_rgba(0,0,0,0.25)] rounded-[18px] w-full mx-[10px] overflow-visible aspect-[20/9] bg-[#FAFAFA]
                    "
            >
              <Image
                className="rounded-[18px] object-contain"
                src={image}
                fill
                alt="m"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <NavStore />
      <div className="shadow-xl p-2 w-full text-center border rounded-lg bg-white flex flex-col">
        <div className="flex cursor-pointer gap-3 w-full justify-center flex-wrap text-sm font-medium  text-center text-gray-500 dark:text-gray-400">
          <div
            onClick={() => setTab(0)}
            className={` font-sf_pro_rounded_medium w-[40%] md:w-[19%] border-b-[1px] border-[#9D9D9D] ${
              tab === 0
                ? "cursor-default flex items-center justify-center p-2 md:p-4 rounded-t-lg text-[#565656] bg-white"
                : "flex items-center justify-center p-2 md:p-4 transition duration-300 hover:text-[#565656] hover:bg-white text-[#F8F8F8] bg-[#686868] rounded-t-lg "
            }`}
          >
            Product
          </div>
          <div
            onClick={() => setTab1(1)}
            className={` font-sf_pro_rounded_medium w-[40%] md:w-[19%] border-b-[1px] border-[#9D9D9D] ${
              tab === 1
                ? "cursor-default flex items-center justify-center p-2 md:p-4 rounded-t-lg text-[#565656] bg-white"
                : "flex items-center justify-center p-2 md:p-4 transition duration-300 hover:text-[#565656] hover:bg-white text-[#F8F8F8] bg-[#686868] rounded-t-lg "
            }`}
          >
            AUSTRALIAN LUXURIES
          </div>
          <div
            onClick={() => setTab(2)}
            className={` font-sf_pro_rounded_medium w-[40%] md:w-[19%] border-b-[1px] border-[#9D9D9D] ${
              tab === 2
                ? "cursor-default flex items-center justify-center p-2 md:p-4 rounded-t-lg text-[#565656] bg-white"
                : "flex items-center justify-center p-2 md:p-4 transition duration-300 hover:text-[#565656] hover:bg-white text-[#F8F8F8] bg-[#686868] rounded-t-lg "
            }`}
          >
            GALLERY
          </div>
          <div
            onClick={() => setTab(3)}
            className={` font-sf_pro_rounded_medium w-[40%] md:w-[19%] border-b-[1px] border-[#9D9D9D] ${
              tab === 3
                ? "cursor-default flex items-center justify-center p-2 md:p-4 rounded-t-lg text-[#565656] bg-white"
                : "flex items-center justify-center p-2 md:p-4 transition duration-300 hover:text-[#565656] hover:bg-white text-[#F8F8F8] bg-[#686868] rounded-t-lg "
            }`}
          >
            SEE OUR CATALOGUE
          </div>
          <div
            onClick={() => setTab(4)}
            className={`self-center font-sf_pro_rounded_medium w-[40%] md:w-[19%] border-b-[1px] border-[#9D9D9D] ${
              tab === 4
                ? "cursor-default flex items-center justify-center p-2 md:p-4 rounded-t-lg text-[#565656] bg-white"
                : "flex items-center justify-center p-2 md:p-4 transition duration-300 hover:text-[#565656] hover:bg-white text-[#F8F8F8] bg-[#686868] rounded-t-lg "
            }`}
          >
            Contact us
          </div>
        </div>
      </div>
      <Index countries={countries} cate={cate} tab={tab} />
    </div>
  );
}

export default CategoriesPage;
