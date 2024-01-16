"use client";
import Link from "helpers/Link";
import Image from "helpers/image";

const WholeSale = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 px-4 py-6 bg-white rounded-lg shadow-xl">
      <div className="flex text-gray-700 text-sm md:text-lg lg:text-xl justify-between items-center">
        <div className="flex justify-between items-center gap-x-1">
          <div className="font-semibold">Agriculture WholeSale</div>
        </div>
        <hr className="md:w-[50%] w-0 h-[0.05rem] bg-gray-200 border-0 rounded" />
        <Link
          href={"/main"}
          className="font-semibold underline hover:text-red-500"
        >
          Visit Categories
        </Link>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="w-5/12 h-full ">
          <Image
            className="object-contain rounded-lg relative"
            loading={"eager"}
            src={"/images/agriculture.png"}
            fill
            alt="category"
          />
        </div>
        <div className="w-7/12 h-fit grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="relative p-2 text-center rounded-lg shadow-lg border w-full h-full">
            <Image
              className="object-contain relative"
              loading={"eager"}
              src={"/images/agriculture.png"}
              fill
              alt="category"
            />
          </div>
          <div className="relative p-2 text-center rounded-lg shadow-lg border w-full h-full">
            <Image
              className="object-contain relative"
              loading={"eager"}
              src={"/images/agriculture.png"}
              fill
              alt="category"
            />
          </div>
          <div className="relative p-2 text-center rounded-lg shadow-lg border w-full h-full">
            <Image
              className="object-contain relative"
              loading={"eager"}
              src={"/images/agriculture.png"}
              fill
              alt="category"
            />
          </div>
          <div className="relative p-2 text-center rounded-lg shadow-lg border w-full h-full">
            <Image
              className="object-contain relative"
              loading={"eager"}
              src={"/images/agriculture.png"}
              fill
              alt="category"
            />
          </div>
          <div className="hidden md:block relative p-2 text-center rounded-lg shadow-lg border w-full h-full">
            <Image
              className="object-contain relative"
              loading={"eager"}
              src={"/images/agriculture.png"}
              fill
              alt="category"
            />
          </div>
          <div className="hidden md:block relative p-2 text-center rounded-lg shadow-lg border w-full h-full">
            <Image
              className="object-contain relative"
              loading={"eager"}
              src={"/images/agriculture.png"}
              fill
              alt="category"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeSale;
