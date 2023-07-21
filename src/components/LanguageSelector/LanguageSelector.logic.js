import { Translator } from "@infra/_exports";

const LanguageSelectorLogic = () => {
  const { changeLanguage, language } = Translator();
  const onLanguageChange = (newLanguage) => changeLanguage(newLanguage);

  return { language, onLanguageChange };
};

export default LanguageSelectorLogic;
