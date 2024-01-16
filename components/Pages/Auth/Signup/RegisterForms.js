"use client";
import { useContext, useState } from "react";
import {
  EmailInput,
  PasswordInput,
  PhoneInput,
  TextInput,
  SelectInput,
  RadioInput,
} from "core/Elements/FormInputs";
import { useForm } from "react-hook-form";
import CustomButton from "core/Elements/CustomButton";
import { SvgArrowLeft } from "core/svgs";
import { _register } from "store/actions/auth";
import { Form } from "reactstrap";
import { useRouter } from "next/navigation";
import store from "store";
import { AuthContext } from "../../../../helpers/AuthContext";

const RegisterForms = ({
  role,
  setStep,
  countries,
  setSelectedCountry,
  cities,
  authLoading,
}) => {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register: register1,
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [tab, setTab] = useState(0);
  const [basicData, setBasicData] = useState(null);
  const formRules1 = {
    fullName: {
      required: "this field is required",
    },
    email: {
      required: "this field is required",
    },
    password: {
      required: "this field is required",
    },
    phone: {
      required: "this field is required",
    },
  };
  const formRules = {
    currency: {
      required: "this field is required",
    },
    country: {
      required: "this field is required",
    },
    city: {
      required: "this field is required",
    },
    company: {
      required: "this field is required",
    },
  };
  const onSubmit = (data) => {
    // // console.log(data, "data");
    _register(
      { ...data, basicData },
      (data) => {
        if (data?.data?.access_token) {
          setUser(data?.data);
          router.push("/");
        }
      },
      () => {
        store.dispatch({ type: "AUTH_STOP_LOADING" });
      }
    );
  };
  const handleSubmitBasic = (data) => {
    // console.log(data, "data");
    setBasicData(data);
    setTab(1);
  };
  return (
    <div className="w-full pb-72 px-10 md:px-0 min-h-screen flex items-center flex-col gap-5 justify-center bg-white">
      <div className="text-3xl text-gray-700  font-semibold">
        Get Started absolutely free.
      </div>
      <div className="text-lg text-center text-gray-500 ">
        No credit card needed.
      </div>
      <div className="flex gap-5 w-96 py-10 px-10 bg-gray-100 shadow-xl rounded-lg">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex w-full justify-between text-sm font-medium gap-x-5 text-center text-gray-500 dark:text-gray-400">
            <div
              title="back to Basic Info"
              className={`cursor-pointer flex items-center justify-center ${
                tab === 0 ? "hidden" : ""
              }`}
              onClick={() => setTab(0)}
            >
              <SvgArrowLeft width={30} height={30} />
            </div>
            <div
              className={` flex w-full text-[20px] items-center justify-center text-center p-4 truncate scale-[0.98] text-[#9D9D9D] bg-white rounded-t-lg `}
            >
              <p className="bg-green-600 text-white px-3 rounded-full mr-3">
                {tab + 1}
              </p>
              {tab === 0 ? "Basic" : "Business"} Information
            </div>
          </div>
          <Form
            key={1}
            onSubmit={handleSubmit1(handleSubmitBasic)}
            className={`${
              tab === 0 ? "" : "hidden"
            } w-full flex flex-col gap-2 items-start justify-center`}
          >
            <TextInput
              isLabel={true}
              isLogo={false}
              name={"fullName"}
              placeHolder={"Enter Full Name"}
              label={"Full Name"}
              control={control1}
              register={register1}
              errors={errors1?.fullName}
              rules={formRules1?.fullName}
            />
            <PhoneInput
              isLogo={false}
              isLabel={true}
              name={"phone"}
              placeHolder={"Enter Mobile Number"}
              label={"Mobile Number"}
              control={control1}
              countries={countries}
              register={register1}
              errors={errors1?.phone}
              rules={formRules1?.phone}
            />
            <EmailInput
              isLogo={false}
              isLabel={true}
              name={"email"}
              placeHolder={"Enter Email"}
              label={"Email"}
              control={control1}
              register={register1}
              errors={errors1?.email}
              rules={formRules1?.email}
            />
            <PasswordInput
              isLogo={false}
              isLabel={true}
              setShowPassword={(a) => setShowPassword(a)}
              showPassword={showPassword}
              name={"password"}
              placeHolder={"Enter Password"}
              label={"Password"}
              control={control1}
              register={register1}
              errors={errors1?.password}
              rules={formRules1?.password}
            />
            <CustomButton
              // onClick={handleSubmitBasic}
              disabled={false}
              type="submit"
              className="bg-[#FAFAFA] w-full my-5"
            >
              Continue
            </CustomButton>
          </Form>
          <Form
            key={2}
            onSubmit={handleSubmit(onSubmit)}
            className={`${
              tab === 0 ? "hidden" : ""
            } w-full flex flex-col gap-2 items-start justify-center`}
          >
            <TextInput
              isLabel={true}
              isLogo={false}
              name={"company"}
              placeHolder={"Enter Company Name"}
              label={"Company"}
              control={control}
              register={register}
              errors={errors?.company}
              rules={formRules?.company}
            />
            {/* <TextInput
                isLabel={true}
                isLogo={false}
                name={"keywords"}
                placeHolder={"Enter Keywords"}
                label={"Keywords"}
                control={control}
                register={register}
              /> */}
            <SelectInput
              isLabel={true}
              isLogo={false}
              name={"country"}
              placeHolder={"Select Country"}
              label={"Country"}
              control={control}
              options={countries}
              setSelectedCountry={(a) => setSelectedCountry(a)}
              values={{ label: "en_name", value: "id" }}
              register={register}
              errors={errors?.country}
              rules={formRules?.country}
            />
            <SelectInput
              isLabel={true}
              isLogo={false}
              name={"city"}
              placeHolder={"Select City"}
              label={"City"}
              options={cities}
              values={{ label: "en_name", value: "id" }}
              control={control}
              register={register}
              disabled={authLoading}
              errors={errors?.city}
              rules={formRules?.city}
            />

            <RadioInput
              isLabel={true}
              isLogo={false}
              name={"currency"}
              placeHolder={"Select Currency"}
              label={"Currency"}
              options={["USD", "AED"]}
              control={control}
              register={register}
              disabled={authLoading}
              errors={errors?.currency}
              rules={formRules?.currency}
            />
            <CustomButton
              // onClick={onSubmit}
              loading={authLoading}
              disabled={authLoading}
              className={`bg-[#FAFAFA] w-full my-5 ${
                tab === 0 ? " hidden" : ""
              }`}
              type="submit"
            >
              Register
            </CustomButton>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default RegisterForms;
