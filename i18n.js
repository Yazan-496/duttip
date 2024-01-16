"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "./public/locales/en/translation.json";
import commonAr from "./public/locales/ar/translation.json";
import commonTr from "./public/locales/tr/translation.json";

const resources = {
  en: {
    translation: commonEn,
    direction: "ltr",
  },
  ar: {
    translation: commonAr,
    direction: "rtl",
  },
  tr: {
    translation: commonTr,
    direction: "rtl",
  },
};
const savedLanguage =
  typeof window !== "undefined" && localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
