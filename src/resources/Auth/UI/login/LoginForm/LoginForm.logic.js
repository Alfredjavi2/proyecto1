import { useHistory } from "react-router-dom";
import { joiResolver, useForm } from "@mantine/form";

import { Alert, Auth, Translator } from "@infra/_exports";
import { useLoginMutation } from "@resources/Auth/Auth.queries";
import AuthValidator from "@resources/Auth/Auth.validator";
import UserModel from "@resources/User/User.class";
import paths from "@navigation/paths";

const LoginFormLogic = () => {
  const { t } = Translator();
  const history = useHistory();

  const form = useForm({
    validate: joiResolver(AuthValidator.loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isLoading } = useLoginMutation();

  const handleLogin = (values) => {
    login(values, {
      onSuccess: (response) => {
        const user = new UserModel({
          ...response.user,
          enterprise: response.enterprise,
        });
        if (!user.isExecutive()) {
          Alert.info("No eres ejecutivo");
          return;
        }
        Auth.setLoginData({ user, token: response.user.token });
        history.push(paths.home);
      },
    });
  };

  const text = {
    email: t("basic.email"),
    password: t("basic.password"),
    login: t("auth.login"),
    f_pass: t("auth.f_pass"),
  };

  return { form, text, isLoading, handleLogin };
};

export default LoginFormLogic;
