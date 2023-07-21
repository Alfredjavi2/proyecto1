import { changeLanguage, t } from "i18next";
import { useTranslation } from "react-i18next";

const Translator = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return { changeLanguage, t, language };
};

export default Translator;
