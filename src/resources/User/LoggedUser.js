import Auth from "@infra/Auth";

const LoggedUser = () => {
  const userLogged = Auth.getLoggedUser();

  const {
    last_name,
    name,
    personal_phone,
    profile_photo,
    role,
    enterprise,
    id: user_id,
  } = userLogged;

  const { id: enterprise_id } = enterprise;

  return {
    enterprise_id,
    user_id,
    last_name,
    name,
    personal_phone,
    profile_photo,
    role,
  };
};

export default LoggedUser;
