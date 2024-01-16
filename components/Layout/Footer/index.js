import Link from "helpers/Link";
import Image from "helpers/image";
import { AppleSvg, TextSvg } from "core/svgs";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-white">
      <div className="sticky bg-[#2E2E2E] px-0 lg:px-[200px] w-full h-auto lg:h-[662px] justify-center text-white flex bottom-0 left-0">
        <div className="w-full lg:w-[1520px] mt-[117px] h-auto lg:h-[362px] mr-0 lg:mr-[38px] grid grid-cols-2 md:grid-cols-4 gap-y-10">
          <div className="flex flex-col w-[310px] text-center">
            <div className="text-[20px] text-white leading-[27px] font-sf_pro_rounded_medium">
              BİZ KİMİZ?
            </div>
            <Link
              className="flex items-center my-auto gap-x-[10px] pb-[31px] pt-[22px] justify-start"
              href="/"
            >
              <div className="w-[57px] h-[61px] mb-[4px]">
                <Image
                  sizes="(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 10vw"
                  width={57}
                  height={61}
                  src={"/appleLogo.png"}
                  alt="logo"
                />
              </div>
              <div className="!font-sf_pro_display leading-[56px] text-[#FFFFF] flex flex-col text-[42px]">
                DUTTIP
                <div>
                  <TextSvg fill={"white"} />
                </div>
              </div>
            </Link>
            <div className="text-[20px] ml-[67px] text-left text-[#9D9D9D] font-sf_pro_rounded_regular leading-[27px]">
              DUTTİP, Firmaları Bir Araya Getirerek Küresel Ticareti
              Geliştirmeyi Amaçlayan Interaktif Ticaret Platformudur.
            </div>
          </div>
          <div className="text-[20px] text-center text-white leading-[27px] font-sf_pro_rounded_medium">
            ÜYELİK
          </div>
          <div className="flex flex-col max-w-[277px] space-y-[17px] text-center">
            <div className="text-[20px] text-white font-sf_pro_rounded_mediumleading-[27px]">
              HİZMETLERİMİZ
            </div>
            <div className="text-[20px] pt-[25px] font-sf_pro_rounded_regular text-center text-[#9D9D9D] leading-[27px]">
              Hakkımızda
            </div>
            <div className="text-[20px] font-sf_pro_rounded_regular  text-center text-[#9D9D9D] leading-[27px]">
              Üyelik Paketleri
            </div>
            <div className="text-[20px] font-sf_pro_rounded_regular text-center text-[#9D9D9D] leading-[27px]">
              Sıkça Sorulan Sorular
            </div>
            <div className="text-[20px] font-sf_pro_rounded_regular text-center text-[#9D9D9D] leading-[27px]">
              KOBİ Destek
            </div>
          </div>
          <div className="flex flex-col pb-10 lg:pb-0 w-full lg:w-[248px] text-center">
            <div className="text-[20px] font-sf_pro_rounded_medium text-white leading-[27px]">
              İLETİŞİM
            </div>
            <div className="text-[20px] flex pt-[38px] justify-center font-sf_pro_rounded_regular text-center text-[#9D9D9D] leading-[27px]">
              <Image
                className=" mr-[19px]"
                src={"/images/call.svg"}
                width={15}
                height={15}
                alt="3"
              />{" "}
              +90 212 503 23 00
            </div>
            <div className="text-[20px] pt-[17px] justify-center flex font-sf_pro_rounded_regular text-center text-[#9D9D9D] leading-[27px]">
              <Image
                className=" mr-[19px]"
                src={"/images/@.svg"}
                width={15}
                height={15}
                alt="3"
              />
              info@duttip.com.tr
            </div>
            <div className="pt-[29px] flex  items-center justify-center pb-[8px]">
              <Image
                src={"/images/map.png"}
                className="rounded-[20px]"
                width={215}
                height={75}
                alt="3"
              />
            </div>
            <div className="text-[20px] text-center font-sf_pro_rounded_regular text-[#9D9D9D] leading-[27px]">
              Şirinevler Mah. Adnan Kahveci
            </div>
            <div className="w-full text-[20px] text-center font-sf_pro_rounded_regular text-[#9D9D9D] leading-[27px]">
              Bulvarı Kocasinan İş Merkezi
              <br /> No: 200, B Blok Kat: 2<br />
              Bahçelievler / İstanbul
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
