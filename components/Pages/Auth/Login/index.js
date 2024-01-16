"use client";

import { useState } from "react";
import Link from "helpers/Link";
import CustomButton from "core/Elements/CustomButton";
import { EmailInput, PasswordInput } from "core/Elements/FormInputs";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, control } = useForm({});
  return (
    <div className="w-full pb-72 md:px-0 min-h-screen flex items-center flex-col gap-5 justify-center bg-white">
      <div className="text-3xl text-gray-700  font-semibold">Login</div>
      <div className="text-lg text-center text-gray-500 ">
        Just sign in if you have an account in here. Enjoy our Website
      </div>
      <div className="shadow-xl w-[calc(100%-20px)] lg:w-[30rem] text-center border rounded-lg bg-white flex flex-col">
        <Form className="w-full flex flex-col gap-y-4 p-4">
          <EmailInput
            name={"email"}
            placeHolder={"Enter Email"}
            label={"Mobile Number or Email"}
            control={control}
            register={register}
          />
          <PasswordInput
            showPassword={showPassword}
            setShowPassword={(a) => setShowPassword(a)}
            name={"password"}
            placeHolder={"Enter Password"}
            label={"Password"}
            control={control}
            register={register}
          />

          <div className="w-full text-left font-sf_pro_rounded_light text-[#686868]">
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>
          <CustomButton disabled={false} className="bg-[#FAFAFA]" type="submit">
            Login
          </CustomButton>
        </Form>
      </div>
      <div className="text-gray-500">
        <div>
          New to Duttip.com?{" "}
          <Link
            className=" font-sf_pro_rounded_light hover:text-[#414040] text-[#686868]"
            href={"/signup"}
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
