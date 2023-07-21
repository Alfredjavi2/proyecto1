import Translator from "@infra/Translator";

const ProfileViewDataLogic = ({ userData }) => {
  const { t } = Translator();

  const text = {
    save: t("basic.save"),
    name: t("basic.name"),
    last_name: t("basic.last_name"),
    email: t("basic.email"),
    personal_phone: t("basic.personal_phone"),
  };

  return {
    text,
  };
};

export default ProfileViewDataLogic;
