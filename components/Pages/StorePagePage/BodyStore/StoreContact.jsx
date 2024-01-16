import {useState} from "react";
import {EmailInput, PhoneInput, TextInput} from "../../../../core/Elements/FormInputs";
import {Form} from "reactstrap";
import {useForm} from "react-hook-form";
import {SpinnerShapedSvg} from "../../../../helpers/svgs";

const StoreContact = ({countries}) => {
    const {
        register, control, handleSubmit, formState: {errors},
    } = useForm();
    const {
        register: register1,
        control: control1,
        handleSubmit: handleSubmit1,
        formState: { errors: errors1 },
    } = useForm();
    const formRules = {
        name: {
            required: "this field is required",
        }, email: {
            required: "this field is required",
        }, phone: {
            required: "this field is required",
        }
    };
    const formRules1 = {
        name: {
            required: "this field is required",
        }, email: {
            required: "this field is required",
        }, phone: {
            required: "this field is required",
        }, message: {
            required: "this field is required",
        }
    };
    const [openInfo, setOpenInfo] = useState(false)
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false)
    const _openInfoModal = () => {
        setOpenInfo(true)
    }
    const _closeInfoModal = () => {
        setOpenInfo(false)
    }
    const onSubmit = async (data) => {
        if (data) {
            await _sendGuestData(data)
        }
    };
    const onSubmit1 = async (data) => {
        if (data) {
            // await _sendGuestData(data)
        }
    };
    const _sendGuestData = async (data) => {
        console.log("_sendGuestData");
        setLoading(true)
        setTimeout(() => {
            console.log("true");
            setLoading(false)
            setOpenInfo(false)
            setDone(true)
            return true
        }, 2000)
    }
    return (<div className="flex flex-col items-stretch md:flex-row justify-center w-full gap-10 ">
        <div
            className='w-full flex flex-col bg-white shadow-xl p-5 items-start justify-start gap-5 rounded-lg'>
            <p className='text-lg text-black/80 md:text-2xl font-sf_pro_rounded_semibold '>
                Contact Us
            </p>

            <Form key={1}
                onSubmit={handleSubmit1(onSubmit1)} className="w-full flex flex-col gap-y-4 p-4">
                <TextInput
                    isLabel={false}
                    isLogo={false}
                    name={"name"}
                    placeHolder={"Enter Full Name"}
                    label={"Full Name"}
                    control={control1}
                    register={register1}
                    errors={errors1?.name}
                    rules={formRules1?.name}
                />
                <PhoneInput
                    isLogo={false}
                    isLabel={false}
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
                    isLabel={false}
                    name={"email"}
                    placeHolder={"Enter Email"}
                    label={"Email"}
                    control={control1}
                    register={register1}
                    errors={errors1?.email}
                    rules={formRules1?.email}
                />
                <TextInput
                    isLabel={false}
                    isLogo={false}
                    name={"message"}
                    placeHolder={"Enter Message"}
                    label={"Message"}
                    control={control1}
                    register={register1}
                    errors={errors1?.message}
                    rules={formRules1?.message}
                />
                {
                    <div className="flex items-center gap-2 justify-center p-2">
                        <button
                            type="submit"
                            className="flex justify-center rounded-[10px] focus:scale-95 text-[#686868] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px] "
                        >
                            <div
                                className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                                Send
                            </div>
                        </button>
                    </div>}
            </Form>
        </div>
        <div
            className='w-full flex flex-col bg-white shadow-xl p-5 items-start justify-start gap-5 rounded-lg'>
            <p className='text-lg text-black/80 md:text-2xl font-sf_pro_rounded_semibold '>
                Head Quarter
            </p>
            {done ? <div className="flex text-gray-500 flex-col gap-4 items-start justify-center">
                <p>Australia - Sydney</p>
                <p>+61  61433888838</p>
                <p>+61  433888838</p>
                <p>info@australianluxuries.com.au</p>
                <p> http://www.australianluxuries.com.au</p>
            </div> : <button
                type="button"
                onClick={_openInfoModal}
                className="flex justify-center rounded-[10px] focus:scale-95 text-[#686868] items-center overflow-hidden
                        group w-full md:w-1/3 h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px] "
            >
                <div className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                    View Contact Details
                </div>
            </button>}
            {<div
                className={`hs-overlay ${openInfo ? "backdrop-brightness-50 opacity-1 visible " : "opacity-0 backdrop-brightness-100 hidden"}
                     w-full h-full transition-[all,visibility] duration-[1s,1s] delay-[0s,1s]
                      fixed flex items-center justify-center top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none`}
            >
                <div
                    className={`relative ${openInfo ? "top-10 opacity-100" : "top-0  opacity-0"} duration-300 ease-out 
                            transition-all m-3 mx-auto`}>
                    <div
                        className="flex rounded-[10px] flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">Contact Information</h3>
                            <button
                                type="button"
                                onClick={_closeInfoModal}
                                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18"/>
                                    <path d="m6 6 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className='px-20 text-lg text-black/80 md:text-2xl font-sf_pro_rounded_semibold '>
                                View Details as Guest
                            </p>
                            <Form key={2}
                                onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4 p-4">
                                <TextInput
                                    isLabel={false}
                                    isLogo={false}
                                    name={"name"}
                                    placeHolder={"Enter Full Name"}
                                    label={"Full Name"}
                                    control={control}
                                    register={register}
                                    errors={errors?.name}
                                    rules={formRules?.name}
                                />
                                <PhoneInput
                                    isLogo={false}
                                    isLabel={false}
                                    name={"phone"}
                                    placeHolder={"Enter Mobile Number"}
                                    label={"Mobile Number"}
                                    control={control}
                                    countries={countries}
                                    register={register}
                                    errors={errors?.phone}
                                    rules={formRules?.phone}
                                />
                                <EmailInput
                                    isLogo={false}
                                    isLabel={false}
                                    name={"email"}
                                    placeHolder={"Enter Email"}
                                    label={"Email"}
                                    control={control}
                                    register={register}
                                    errors={errors?.email}
                                    rules={formRules?.email}
                                />
                                {loading ?
                                    <div className="w-full flex items-center justify-center"><SpinnerShapedSvg/></div> :
                                    <div className="flex items-center gap-2 justify-center p-2">
                                        <button
                                            type="submit"
                                            className="flex justify-center rounded-[10px] focus:scale-95 text-[#686868] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px] "
                                        >
                                            <div
                                                className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                                                View
                                            </div>
                                        </button>
                                        <button
                                            type='button'
                                            onClick={_closeInfoModal}
                                            className="flex justify-center rounded-[10px] focus:scale-95 text-[#d52a2c] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px]"
                                        >
                                            <div
                                                className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                                                CLose
                                            </div>
                                        </button>
                                    </div>}
                            </Form>
                        </div>

                    </div>
                </div>
            </div>}

        </div>
    </div>)
}
export default StoreContact