"use client";

import { useState } from "react";
import Link from "helpers/Link";
import { EmailInput, PhoneInput } from "core/Elements/FormInputs";
import { useForm } from "react-hook-form";
import CustomButton from "core/Elements/CustomButton";

const ForgotPasswordPage = () => {
  const { register, control } = useForm({});
  const [tab, setTab] = useState(1);
  return (
    <div className="w-full pb-72 md:px-0 min-h-screen flex items-center flex-col gap-5 justify-center bg-white">
      <div className="text-3xl text-gray-700  font-semibold">
        Forgot Password
      </div>
      <div className="shadow-xl  w-[calc(100%-20px)] lg:w-[30rem] text-center border rounded-lg bg-white flex flex-col">
        <div className="flex cursor-pointer w-full justify-center flex-wrap text-sm font-medium  text-center text-gray-500 dark:text-gray-400">
          <div
            onClick={() => setTab(1)}
            className={` font-sf_pro_rounded_regular w-1/2 ${
              tab === 1
                ? "cursor-default inline-block p-4 rounded-t-lg text-[#9D9D9D] bg-white"
                : "inline-block p-4 hover:text-[#9D9D9D] hover:bg-white text-[rgb(157,157,157)] bg-[#F8F8F8] rounded-t-lg "
            }`}
          >
            Reset By Email
          </div>
          <div
            onClick={() => setTab(0)}
            className={` font-sf_pro_rounded_regular w-1/2 ${
              tab === 0
                ? "cursor-default inline-block p-4 rounded-t-lg text-[#9D9D9D] bg-white"
                : "inline-block p-4 hover:text-[#9D9D9D] hover:bg-white text-[#9D9D9D] bg-[#F8F8F8] rounded-t-lg "
            }`}
          >
            Reset By Whatsapp OTP
          </div>
        </div>

        <form className="w-full flex flex-col gap-y-4 p-4">
          {tab === 0 ? (
            <PhoneInput
              name={"phone"}
              placeHolder={"Enter Phone Number"}
              label={"Phone Number"}
              control={control}
              register={register}
            />
          ) : (
            <EmailInput
              name={"email"}
              placeHolder={"Enter Email"}
              label={"Mobile Number or Email"}
              control={control}
              register={register}
            />
          )}
          <CustomButton disabled={false} className="bg-[#FAFAFA]" type="submit">
            Reset Password
          </CustomButton>
        </form>
      </div>
      <div className=" font-sf_pro_rounded_regular text-gray-500">
        <div>
          Back To{" "}
          <Link
            className=" font-sf_pro_rounded_regular text-[#9D9D9D]"
            href={"/login"}
          >
            Login
          </Link>
        </div>
      </div>
      <div className=" font-sf_pro_rounded_regular text-gray-500">
        <div>
          New to Duttip.com?{" "}
          <Link
            className="text-[#9D9D9D] font-sf_pro_rounded_regular"
            href={"/signup"}
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
