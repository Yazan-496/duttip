"use client";
import {SearchSVG} from "core/svgs";
import Link from "helpers/Link";
import Image from "helpers/image";
import {useContext} from "react";
import notiPhoto from "public/svg/noti.svg"
import heartPhoto from "public/svg/heart.svg"
import messagePhoto from "public/svg/message.svg"
import login2Photo from "public/svg/login2.svg"
import logoPhoto from "public/logo.svg"
import {AuthContext} from "../../../helpers/AuthContext";
import {TransClient} from "core/Language/TransClient";

const Header = ({categories, categoriesJson, isShowCategory}) => {
    const {user, setUser} = useContext(AuthContext);
    console.log("user: ", user);
    return (<header
        className="bg-white flex z-40 sticky top-0 p-2 left-0 drop-shadow-[0px_3px_12px_rgba(0,0,0,0.10)] justify-center">
        <div className={`w-full flex flex-col bg-white`}>
            <div
                className="relative w-full
        grid grid-cols-[40%_55%] md:grid-cols-[20%_40%_30%] lg:grid-cols-3 
       gap-[5%] md:gap-[5%] lg:gap-0 p-4"
            >
                <Link
                    className="flex items-center my-auto gap-x-[10px] justify-start"
                    href="/"
                >
                    <Image
                        sizes="(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 10vw"
                        width={216}
                        height={78}
                        src={logoPhoto}
                        alt="logo"
                    />
                    {/* <div className="!font-sf_pro_display leading-[56px] flex flex-col text-[42px]">
              DUTTIP
              <div>
                <TextSvg fill={"black"} />
              </div>
            </div> */}
                </Link>
                {/* bg-[url('/images/borderNS.svg')] */}
                <div className="flex order-last md:order-none w-[90vw] md:w-full items-center justify-center">
                    <div
                        className="rounded-[12px] m-0 md:m-auto text-[#9B9B9B] text-[16px] font-sf_pro_rounded_regular
            border-[1px] border-[#DBDBDB70]
             bg-center bg-[#F8F8F8]
       relative flex aspect-input max-w-[370px] md:max-w-[500px] mt-2 md:mt-0 w-full py-1 px-5 items-center justify-between"
                    >
                        <SearchSVG w={30} h={30}/>
                        <input
                            className="focus:font-sf_pro_rounded_regular font-sf_pro_rounded_regular bg-transparent w-[233px]"
                            // placeholder="Search Marks, Barcode, Category"
                            placeholder={`${TransClient("header.Search Marks, Barcode, Category")}`}
                        />
                        <div/>
                    </div>
                </div>
                <div className=" flex items-center justify-end gap-2 md:gap-8">
                    <div className="w-25 h-25 md:w-25 md:h-25">
                        <Image
                            className="relative text-[#686868]"
                            src={messagePhoto}
                            fill
                            alt="n"
                        />
                    </div>
                    <div className="w-25 h-25 md:w-25 md:h-25">
                        <Image className="relative text-[#686868]" src={heartPhoto} fill alt="n"/>
                    </div>
                    <div className="w-25 h-25 md:w-25 md:h-25">
                        <Image fill className="relative text-[#686868]" src={notiPhoto} alt="n"/>
                    </div>
                    {user ? <div className="|flex flex-col gap-1 items-center text-[18px] leading-[24px] text-[#9D9D9D] justify-center">
                        <p className="text-center font-sf_pro_rounded_medium">Welcome</p>
                        <p className="text-center font-sf_pro_rounded_semibold"> {user?.full_name}</p>
                    </div> : <Link
                        href={"/login"}
                        className="ml-[15px] justify-end font-sf_pro_rounded_regular flex items-center gap-2 text-[18px] leading-[24px] text-[#9D9D9D]"
                    >
                        Login
                        <div className="w-25 h-25 md:w-25 md:h-25">
                            <Image className="relative text-[#686868]" src={login2Photo} fill alt="n"/>
                        </div>
                    </Link>}
                </div>
            </div>
            {isShowCategory && (<div className="w-full text-center flex justify-center items-center">
                <div className="flex w-fit py-3 gap-[26px] px-[10px] md:px-0  overflow-x-auto">
                    {categories?.map((category) => {
                        return (<Link
                            href={`/category/slug`}
                            key={category.id}
                            className="flex flex-col gap-2 text-center justify-center items-center"
                        >
                            <Image src={category.icon} width={30} height={30} alt="n"/>
                            <div
                                className="text-[16px]  text-nowrap w-max font-sf_pro_rounded_regular leading-[21px] text-[#686868] font-normal">
                                {category.name}
                            </div>
                        </Link>);
                    })}
                </div>
            </div>)}
        </div>
    </header>);
};

export default Header;
