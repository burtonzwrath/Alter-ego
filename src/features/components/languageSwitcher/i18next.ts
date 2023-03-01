import i18n from "i18next";
import { initReactI18next} from "react-i18next";


i18n.use(initReactI18next).init({
    lng: "en", // Язык по умолчанию
    fallbackLng: "en", // Язык, используемый при отсутствии перевода для запрошенного языка
    resources: {
        en: {
            translation: {
                home: "Home",
                profile:"Profile",
                news:"News",
                login:"Login"
            },
        },
        ukr: {
            translation: {
                home: "Додому",
                profile:"Профіль",
                news:"Новини",
                login:"Увійти"
            },
        },
    },
});


export default i18n;