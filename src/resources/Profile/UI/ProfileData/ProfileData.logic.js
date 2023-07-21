import { useSelector } from "react-redux";

import { useGetExecutiveProfileQuery } from "@resources/Auth/Auth.queries";
import { store_is_editing } from "@resources/Profile/_exports";
import { LoggedUser } from "@resources/User/_exports";

const ProfileDataLogic = () => {
  const { enterprise_id, user_id } = LoggedUser();

  const { data } = useGetExecutiveProfileQuery({
    enterprise_id,
    user_id,
  });

  const isEditing = useSelector(store_is_editing);

  return { data, isEditing };
};

export default ProfileDataLogic;
