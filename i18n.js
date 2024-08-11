import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./public/locales/en/translation.json";
import arLang from "./public/locales/ar/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLang,
    },
    ar: {
      translation: arLang,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
