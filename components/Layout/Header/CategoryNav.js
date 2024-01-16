import Image from "helpers/image";

const CategoryNav = ({ categories }) => {
  return (
    <div className="max-w-full px-0 flex-wrap flex items-center bg-[#F5F5F5] justify-center py-[10px] md:py-[18px] gap-2 md:gap-4">
      {categories?.map((category) => {
        return (
          <div
            key={category.id}
            className="flex min-h-[40px] md:min-h-[63px] min-w-max bg-[#FFFFFF] rounded-[12px]
             drop-shadow-0x3x6 text-center p-[5px] md:p-[13px] justify-center items-center"
          >
            <div className="relative mt-[2px] mb-[2px] ml-[2px] mr-[8px] w-[20px] h-[20px] md:w-[30px] md:h-[30px]">
              <Image className="" src={category.iconLight} fill alt="n" />
            </div>
            <div className="w-fit text-[10px] md:text-[14px] pb-[1px] flex flex-col items-center font-sf_pro_rounded_regular justify-center leading-[19px] text-[#8E8E8E] ">
              <p className=" text-nowrap w-max">{category.name}</p>
              <small className="text-[10px] font-sf_pro_rounded_regular leading-[14px] text-[#8E8E8E]">
                {category?.qty}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNav;
