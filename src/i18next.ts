import i18n from "i18next";
import { initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "ukr", // Язык по умолчанию
    fallbackLng: "en", // Язык, используемый при отсутствии перевода для запрошенного языка
    resources: {
        en: {
            translation: {
                home: "Home",
                profile:"Profile",
                news:"News",
                login:"Login",
                newsList:"News List",
                download:"Download more",
                ukraine:"Ukraine",
                isHome:"is my home"
            },
        },
        ukr: {
            translation: {
                home: "Додому",
                profile:"Профіль",
                news:"Новини",
                login:"Увійти",
                newsList:"Новини",
                download:"Завантажити ще",
                ukraine:"Украина",
                isHome:"- мой дом"
            },
        },
    },
});


export default i18n;