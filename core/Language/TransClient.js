"use client";
import Cookies from "js-cookie";

import commonEn from "/public/locales/en/translation.json";
import commonTr from "/public/locales/tr/translation.json";
import commonAr from "/public/locales/ar/translation.json";

function loadTranslations(lang) {
  try {
    return lang === "en"
      ? commonEn
      : lang === "tr"
      ? commonTr
      : lang === "ar"
      ? commonAr
      : commonEn;
  } catch (error) {
    // console.log('Error reading translations.json:', error);
    return {};
  }
}

export const TransClient = (str) => {
  let savedLanguage;
  let savedCountry;
  const localization =
    Cookies.get("localization") && JSON.parse(Cookies.get("localization"));
  savedLanguage = localization?.language;
  savedCountry = localization?.country;
  console.log(savedCountry, savedLanguage);
  const translations = loadTranslations(savedLanguage);

  const keys = str.split(".");

  let translation = translations;
  for (const key of keys) {
    translation = translation[key];
    if (!translation) {
      return str;
    }
  }

  return translation;
};
