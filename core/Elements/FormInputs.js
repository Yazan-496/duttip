import { ClosedEyeSvg, EmailSvg, LockSvg, OpenedEyeSvg } from "helpers/svgs";
import { FormGroup, Input } from "reactstrap";
import { Controller } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

export const TextInput = ({
  className,
  isLabel,
  isLogo,
  name,
  errors,
  control,
  label,
  placeHolder,
  register,
  rules,
  children,
  ...rest
}) => {
  return (
    <>
      {isLabel && (
        <small className="text-center text-gray-500 text-lg">{label}</small>
      )}
      <FormGroup className={"relative w-full flex flex-col gap-1"}>
        <Controller
          className="w-full"
          name={name}
          control={control}
          id={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={label}
              placeholder={placeHolder}
              onChange={onChange}
              value={value}
              type="text"
              className={`${
                errors ? "border-red-200" : "border-gray-200"
              } border-[0.1px] w-full text-sm text-gray-500  rounded-lg py-3 ${
                isLogo ? "px-10 " : "px-5"
              }`}
            />
          )}
        />
        <div className="absolute text-center p-2 h-full text-gray-400">
          {/*<EmailSvg/>*/}
        </div>
        <small className="text-red-500">{errors && errors.message}</small>
      </FormGroup>
    </>
  );
};
export const RadioInput = ({
  className,
  isLabel,
  isLogo,
  name,
  errors,
  control,
  label,
  placeHolder,
  register,
  rules,
  options,
  ...rest
}) => {
  return (
    <>
      {isLabel && (
        <small className="text-center text-gray-500 text-lg">{label}</small>
      )}
      <FormGroup className="flex gap-4">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex cursor-pointer hover:scale-[1.01] gap-x-1 justify-center items-center"
                >
                  <input
                    type="radio"
                    value={option}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                    checked={field.value === option}
                    {...rest}
                  />
                  {option}
                </label>
              ))}
            </>
          )}
          rules={rules}
        />
      </FormGroup>
      <small className="text-red-500">{errors && errors.message}</small>
    </>
  );
};

export const SelectInput = ({
  className,
  isLabel,
  isLogo,
  name,
  errors,
  control,
  label,
  placeHolder,
  register,
  rules,
  options,
  values,
  setSelectedCountry,
  disabled,
  children,
  ...rest
}) => {
  //   // console.log(values.value, "options");
  return (
    <>
      {isLabel && (
        <small className="text-center text-gray-500 text-lg">{label}</small>
      )}
      <FormGroup className={"relative w-full flex flex-col gap-1"}>
        <Controller
          className="w-full "
          name={name}
          control={control}
          id={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value, defaultValue } }) => (
            <select
              label={label}
              placeholder={placeHolder}
              disabled={disabled}
              onChange={(e) => {
                name === "country" && setSelectedCountry(e.target.value);
                onChange(e.target.value);
              }}
              value={value}
              className={`w-full disabled:bg-gray-300 py-3.5 flex items-center justify-start border bg-white text-sm text-gray-500
               ${
                 errors ? "border-red-200" : "border-gray-200"
               } border-[0.1px]  rounded-lg ${isLogo ? "px-10 " : "px-5"}`}
            >
              {/*<optgroup className="py-2 m-2 flex">*/}
              <option
                style={{
                  marginBottom: 100,
                }}
                className="!p-10 inline-block"
              >
                Select a {label}
              </option>
              {options?.map((option, index) => {
                return (
                  <option
                    key={index}
                    style={{
                      marginBottom: 100,
                    }}
                    className="!p-10 inline-block"
                    value={option[values?.value]}
                  >
                    {option[values?.label]}
                  </option>
                );
              })}
              {/*</optgroup>*/}
            </select>
          )}
        />
        <div className="absolute text-center p-2 h-full text-gray-400">
          {/*<EmailSvg/>*/}
        </div>
        <small className="text-red-500">{errors && errors.message}</small>
      </FormGroup>
    </>
  );
};
export const EmailInput = ({
  className,
  isLabel,
  isLogo,
  name,
  errors,
  control,
  label,
  placeHolder,
  register,
  rules,
  children,
  ...rest
}) => {
  return (
    <>
      {isLabel && (
        <small className="text-center text-gray-500 text-lg">{label}</small>
      )}
      <FormGroup className={"relative w-full flex flex-col gap-1"}>
        <Controller
          className="w-full"
          name={name}
          control={control}
          id={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={label}
              placeholder={placeHolder}
              onChange={onChange}
              value={value}
              type="email"
              className={`w-full border text-sm text-gray-500 ${
                errors ? "border-red-200" : "border-gray-200"
              } border-[0.1px]  rounded-lg py-3 ${isLogo ? "px-10 " : "px-5"}`}
            />
          )}
        />
        <div className="absolute text-center p-2 h-full text-gray-400">
          {isLogo && <EmailSvg />}
        </div>
        <small className="text-red-500">{errors && errors.message}</small>
      </FormGroup>
    </>
  );
};

export const PhoneInput = ({
  className,
  name,
  errors,
  isLabel,
  isLogo,
  control,
  label,
  placeHolder,
  register,
  rules,
  countries,
  children,
  ...rest
}) => {
  const options = countries?.map((country) => {
    return country?.en_name;
  });
  return (
    <>
      {isLabel && (
        <small className="text-center text-gray-500 text-lg">{label}</small>
      )}
      <FormGroup className={"relative w-full flex flex-col gap-1"}>
        <Controller
          className="w-full"
          name={name}
          control={control}
          id={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <PhoneInputWithCountry
              className={`w-full border  bg-white text-sm text-gray-500 ${
                errors ? "border-red-200" : "border-gray-200"
              } border-[0.1px]  rounded-lg py-3 ${isLogo ? "px-10 " : "px-5"}`}
              countries={options}
              name={name}
              value={value}
              onChange={onChange}
              control={control}
              // rules={{ required: true }}
            />
          )}
        />
        <small className="text-red-500">{errors && errors.message}</small>
      </FormGroup>
    </>
  );
};

export const PasswordInput = ({
  className,
  name,
  errors,
  isLabel,
  isLogo,
  showPassword,
  setShowPassword,
  control,
  label,
  placeHolder,
  register,
  rules,
  children,
  ...rest
}) => {
  return (
    <>
      {isLabel && (
        <small className="text-center text-gray-500 text-lg">{label}</small>
      )}
      <FormGroup className={"relative w-full flex flex-col gap-1"}>
        <Controller
          className="w-full"
          name={name}
          control={control}
          id={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={label}
              placeholder={placeHolder}
              onChange={onChange}
              value={value}
              type={showPassword ? "text " : "password"}
              className={`w-full border text-sm text-gray-500 ${
                errors ? "border-red-200" : "border-gray-200"
              } border-[0.1px]  rounded-lg py-3 ${isLogo ? "px-10 " : "px-5"}`}
            />
          )}
        />
        {isLogo && (
          <div className="absolute text-center p-2 h-full text-gray-400">
            <LockSvg />
          </div>
        )}
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute cursor-pointer top-1 right-2 text-center p-2 h-full text-gray-400"
        >
          {showPassword ? <OpenedEyeSvg /> : <ClosedEyeSvg />}
        </div>
        <small className="text-red-500">{errors && errors.message}</small>
      </FormGroup>
    </>
  );
};
