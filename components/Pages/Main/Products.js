import Image from "helpers/image";
import Link from "helpers/Link";
import React from "react";
import electronics from "public/svg/electronics.svg"
const productItems = [
  {
    id: 1,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 2,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 3,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 4,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 5,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 6,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 7,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 8,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
  {
    id: 9,
    image: "/images/apple1.jpg",
    name: "Product Name",
    details: "Details",
  },
];
const Products = () => {
  return (
    <div className="bg-[#FAFAFA] px-[20px] rounded-[20px] mt-[40px] w-full min-h-[307px] flex flex-col ">
      <div className="flex items-center pt-[20px] pb-[27px] justify-between w-full">
        <div className="flex">
          <Image width={30} height={30} src={electronics} alt="a" />
          <div className="text-[20px] pl-[9px] font-sf_pro_rounded_regular leading-[27px] text-[#686868]">
            Product
          </div>
        </div>
        <Link
          href="/"
          className="font-sf_pro_rounded_regular text-[#2780E8] leading-[21px] text-[16px] underline"
        >
          VISIT ALL
        </Link>
      </div>
      <div className="flex w-full flex-start overflow-auto">
        {productItems?.map((product) => {
          return (
            <div className=" mr-[16px]" key={product.id}>
              <div
                className="relative min-w-[150px] h-[150px]
             rounded-[20px] bg-[#aa8080] drop-shadow-[0px_3px_6px_rgba(0,0,0,0.1)] "
              >
                <Image
                  fill
                  src={product.image}
                  sizes="(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 10vw"
                  className="object-cover rounded-[20px]"
                  alt="s"
                />
              </div>
              <div className="flex pt-[8px] justify-center items-center text-center flex-col">
                <div className="text-[#686868] pb-[3px] font-[16px] font-sf_pro_rounded_regular leading-[21px]">
                  {product.name}
                </div>
                <div className="text-[#686868] font-[14px] font-sf_pro_rounded_regular leading-[19px]">
                  {product.details}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
