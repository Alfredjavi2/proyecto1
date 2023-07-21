import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Auth } from "@infra/_exports";
import paths from "@navigation/paths";

const LogoutView = () => {
  const history = useHistory();

  useEffect(() => {
    Auth.logout();
    history.push(paths.login);
  }, [history]);

  return null;
};

export default LogoutView;
