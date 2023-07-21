import React from "react";
import { Redirect } from "react-router-dom";

import { Auth } from "@infra/_exports";
import paths from "@navigation/paths";
import { LoginForm } from "../Auth.exports";
import HomeLayout from "../UI/HomeLayout/HomeLayout";

const Login = () => {
  if (Auth.isLoggedIn()) return <Redirect to={paths.home} />;

  return (
    <HomeLayout>
      <LoginForm />
    </HomeLayout>
  );
};

export default Login;
