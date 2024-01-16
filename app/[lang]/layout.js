import "styles/globals.css";
import localFont from "next/font/local";
import "react-phone-number-input/style.css";
import NextNProgressClient from "helpers/NextNProgressClient";
import "swiper/css";
import {SpeedInsights} from "@vercel/speed-insights/next";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "rc-slider/assets/index.css";
import {AuthProvider} from "helpers/AuthContext";
import App from "./app";
import AdjustClient from "./adjust";
import CookieConsent from "./cookies-banner";
import {LocalizationProvider} from "helpers/LocalizationContext";

export const metadata = {
    title: "Duttip",
    description: "Duttip",
};
const sf_pro_display = localFont({
    src: "../../public/fonts/SF-Pro-Display-Regular.woff",
    variable: "--SF-Pro-Rounded-Display",
});
const sf_pro_rounded_light = localFont({
    src: "../../public/fonts/SF-Pro-Rounded-light.woff2",
    variable: "--SF-Pro-Rounded-Light",
});
const sf_pro_rounded_semibold = localFont({
    src: "../../public/fonts/SF-Pro-Rounded-normal.woff2",
    variable: "--SF-Pro-Rounded-semibold",
});
const sf_pro_rounded_regular = localFont({
    src: "../../public/fonts/SF-Pro-Rounded-Regular.woff2",
    variable: "--SF-Pro-Rounded-Regular",
});
const sf_pro_rounded_medium = localFont({
    src: "../../public/fonts/SF-Pro-Rounded-normal.woff2",
    variable: "--SF-Pro-Rounded-Medium",
});
export default async function RootLayout({params: {lang}, children}) {
    return (
        <html
            className={`${sf_pro_display.variable} 
      ${sf_pro_rounded_light.variable} 
      ${sf_pro_rounded_semibold.variable} 
      ${sf_pro_rounded_regular.variable} 
      ${sf_pro_rounded_medium.variable} font-sans`}
            lang={lang}
        >
        <body className="bg-[#F4F4F4] min-w-full lg:min-w-[1920px] overflow-x-hidden">
        <LocalizationProvider lang={lang}>
            <AdjustClient/>
            <NextNProgressClient/>
            <App>
                <AuthProvider>
                    {children}
                    <SpeedInsights/>
                </AuthProvider>
            </App>
            <CookieConsent/>
        </LocalizationProvider>
        </body>
        </html>
    );
}
