import { useEffect } from "react";

import Translator from "@infra/Translator";
import { useForm } from "@mantine/form";
import { useModifyProfileMutation } from "@resources/Auth/Auth.queries";
import { LoggedUser } from "@resources/User/_exports";
import Storage from "@infra/Storage";

const ProfileFormLogic = ({ userData }) => {
  const { t } = Translator();

  const form = useForm({
    initialValues: {
      name: "",
      last_name: "",
      personal_phone: "",
      profile_photo: "",
    },
  });

  useEffect(() => {
    if (!userData) return;
    form.setValues({
      name: userData?.name,
      last_name: userData?.last_name,
      personal_phone: userData?.personal_phone,
      profile_photo: userData?.profile_photo,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  //Modify profile
  const { mutate: modifyProfile, isLoading } = useModifyProfileMutation();

  const handleModifyProfile = (values) => {
    const { enterprise_id, user_id } = LoggedUser();

    // TODO make function to clean request
    // send only the data that changed
    const dataUser = { ...values };
    modifyProfile(
      { enterprise_id, user_id, dataUser },
      { onSuccess: () => updateLocalPhoto(userData, values) }
    );
  };

  const text = {
    save: t("basic.save"),
    name: t("basic.name"),
    last_name: t("basic.last_name"),
    personal_phone: t("basic.personal_phone"),
  };

  // Handle new photo selected
  const handleUserPhotoChange = (url) => {
    form.setFieldValue("profile_photo", url);
  };

  // Check if photo changed. Modify local photo
  const updateLocalPhoto = (previous, current) => {
    if (previous?.profile_photo !== current?.profile_photo) {
      // Update photo in local storage
      Storage.setItem("user", {
        ...Storage.get()?.user,
        profile_photo: current?.profile_photo,
      });
    }
  };

  return {
    form,
    text,
    isLoading,
    handleModifyProfile,
    handleUserPhotoChange,
  };
};

export default ProfileFormLogic;
