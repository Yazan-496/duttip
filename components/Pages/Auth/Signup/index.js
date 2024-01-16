"use client";
import {
  BuyerSvg,
  CheckCircleSvg,
  ShipperSvg,
  SupplierSvg,
} from "helpers/svgs";
import { useEffect, useState } from "react";
import CustomButton from "core/Elements/CustomButton";
import RegisterForms from "./RegisterForms";
import { _getCities, _getCountries } from "store/actions/auth";
import { useSelector } from "react-redux";

const SignUpPage = () => {
  const [selectedRole, setSelectedRole] = useState({});
  const [step, setStep] = useState(0);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const authLoading = useSelector((state) => state?.AuthReducer?.authLoading);

  useEffect(() => {
    if (selectedCountry) {
      _getCities(
        selectedCountry,
        (data) => {
          setCities(data?.data);
        },
        () => {}
      );
    }
  }, [selectedCountry]);
  useEffect(() => {
    _getCountries(
      (data) => {
        setCountries(data?.data);
        data?.data?.length > 0 && setSelectedCountry(data?.data[0]?.id);
      },
      () => {}
    );
  }, []);
  const roles = [
    {
      id: 1,
      name: "Supplier",
      image: <SupplierSvg />,
    },
    {
      id: 2,
      name: " Buyer ",
      image: <BuyerSvg />,
    },
    {
      id: 3,
      name: "Shipper",
      image: <ShipperSvg />,
    },
  ];
  const _handleClickFirst = () => {
    setStep(1);
  };
  return step === 0 ? (
    <div className="w-full pb-72 px-10 md:px-0 min-h-screen flex items-center flex-col gap-5 justify-center bg-white">
      <div className="text-3xl text-gray-700  font-semibold">
        Select your business
      </div>
      <div className="text-lg text-center text-gray-500 ">Register as</div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5 p-10 bg-gray-100 shadow-xl rounded-lg">
          {roles?.map((role, i) => {
            return (
              <button
                className={`px-4 max-w-xss relative p-2 hover:shadow-lg duration-300 focus:scale-[1.01] hover:scale-[0.96]
                            cursor-pointer border rounded-lg aspect-[1/1] flex flex-col gap-2 items-center justify-center
                            ${
                              selectedRole?.id === role.id
                                ? "bg-[#FAFAFA]"
                                : "bg-white"
                            }
                            `}
                onClick={() => setSelectedRole(role)}
                key={i}
              >
                {role.image}
                {/* <Image
                  className="max-w-xs relative object-contain"
                  src={role.image}
                  alt={role.name}
                  fill
                /> */}
                <div className={`text-gray-700 relative text-lg text-center `}>
                  {role.name}
                </div>
                <small className={`absolute top-1 left-1 text-gray-200`}>
                  <CheckCircleSvg checked={selectedRole?.id === role.id} />
                </small>
              </button>
            );
          })}
        </div>

        <CustomButton
          onClick={_handleClickFirst}
          disabled={!selectedRole.id}
          className="bg-[#FAFAFA]"
          type="submit"
        >
          Continue
        </CustomButton>
      </div>
    </div>
  ) : (
    <RegisterForms
      countries={countries}
      cities={cities}
      authLoading={authLoading}
      role={selectedRole}
      setSelectedCountry={(a) => setSelectedCountry(a)}
      setStep={(a) => setStep(a)}
    />
  );
};
export default SignUpPage;
