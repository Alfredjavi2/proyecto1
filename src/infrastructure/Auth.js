import { UserModel } from "@resources/User/_exports";
import Storage from "./Storage";
import API from "./Api";

const Auth = (function () {
  // If a token exists, consider user as logged
  const isLoggedIn = () => !!Storage.get()?.token;
  const logout = () => Storage.emptyStorage();

  // Logged user info with class model
  let global_logged_user = new UserModel({});

  // Handle login
  const setLoginData = ({ token, user }) => {
    Storage.setItem("token", token);
    Storage.setItem("user", {
      id: user?.id,
      role: user?.role,
      last_name: user?.last_name,
      name: user?.name,
      profile_photo: user?.profile_photo,
    });
    Storage.setItem("enterprise", user.enterprise);

    // Update token in API
    API.setToken(token);

    // Updates the logged user class data
    global_logged_user = user;
  };

  const getLoggedUser = () => global_logged_user;

  const updateLoggedUserData = ({ user = {}, enterprise = {} }) => {
    global_logged_user = new UserModel(user);
    global_logged_user.setEnterprise(enterprise);
  };

  // Update with local storage data by default on initialization
  updateLoggedUserData({
    user: Storage.get()?.user,
    enterprise: Storage.get()?.enterprise,
  });

  return {
    isLoggedIn,
    setLoginData,
    logout,
    getLoggedUser,
    updateLoggedUserData,
  };
})();

export default Auth;
