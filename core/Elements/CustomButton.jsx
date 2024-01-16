import { SpinnerShapedSvg, SpinnerSvg } from "helpers/svgs";

const CustomButton = ({ className, loading, children, ...rest }) => {
  return (
    <button
      className={`relative disabled:opacity-[0.7] disabled:cursor-not-allowed cursor-pointer
                focus:bg-[#cccccc] border text-[20px] font-sf_pro_rounded_regular focus:border-[#cccccc] border-[#cfcfcf] focus:text-[#FAFAFA] !text-[#9D9D9D] focus:scale-[1.01] hover:text-white hover:scale-[0.99] hover:bg-[#686868]
               p-3 flex items-center justify-center rounded-md
                ${className} `}
      {...rest}
    >
      {loading ? (
        // <div className="flex w-full items-center justofy-center">
        <SpinnerShapedSvg />
      ) : (
        // </div>
        children
      )}
    </button>
  );
};

export default CustomButton;
