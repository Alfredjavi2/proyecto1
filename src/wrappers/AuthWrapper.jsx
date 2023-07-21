import { Redirect } from "react-router-dom";

import { paths } from "@navigation/_exports";
import { Auth } from "@infra/_exports";

const AuthWrapper = ({ children }) => {
  return Auth.isLoggedIn() ? children : <Redirect to={paths.login} />;
};

export default AuthWrapper;
