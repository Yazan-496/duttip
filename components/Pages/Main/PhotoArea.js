import Image from "helpers/image";
import finger from "public/svg/finger.svg"
const PhotoArea = () => {
  return (
    <div className="w-full pt-[8px]  flex flex-col items-center gap-y-5 justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-1">
        <div className="w-[62px] h-0 border-[1px] border-[#5D5C5D70] rounded-[2.5px] " />
        <div className="flex gap-x-[2px]">
          <div className="  text-[10px] font-sf_pro_rounded_light mix-blend-multiply text-[#5D5C5D] leading-[15px] opacity-[0.5] ">
            Drag down to Select the search range
          </div>
          <Image
            className="opacity-1"
            alt="p"
            src={finger}
            width={11}
            height={11}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-x-[20px]">
        <div
          className="flex items-center justify-center cursor-grabbing w-[750px] h-[300px] bg-[#FAFAFA] border-[#FFFFFF]
         rounded-[20px] outline-none border-[0.5px] 
         shadow-[inset_0_2px_4px_0_rgb(255,255,255,0.5)]
         drop-shadow-[0px_3px_12px_rgba(0,0,0,0.10)] "
        >
          <div className="hidden text-[30px] font-sf_pro_rounded_regular leading-[40px] text-[#E6E6E6] ">
            Photo Area
          </div>
        </div>
        <div
          className="flex items-center justify-center cursor-grabbing w-[750px] h-[300px] bg-[#FAFAFA] border-[#FFFFFF]
         rounded-[20px] outline-none border-[0.5px] 
         shadow-[inset_0_2px_4px_0_rgb(255,255,255,0.5)]
         drop-shadow-[0px_3px_12px_rgba(0,0,0,0.10)] "
        >
          <div className="hidden font-sf_pro_rounded_regular text-[30px] leading-[40px] text-[#E6E6E6] ">
            Photo Area
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhotoArea;
