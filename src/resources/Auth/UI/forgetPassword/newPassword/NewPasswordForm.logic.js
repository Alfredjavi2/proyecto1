import Alert from "@infra/Alert";
import { joiResolver, useForm } from "@mantine/form";
import paths from "@navigation/paths";
import { useConfirmForgotPasswordMutation } from "@resources/Auth/Auth.queries";
import AuthValidator from "@resources/Auth/Auth.validator";
import { useHistory } from "react-router-dom";

const NewPasswordFormLogic = () => {
  const history = useHistory();

  const form = useForm({
    validate: joiResolver(AuthValidator.newPasswordSchema),
    initialValues: {
      email: "",
      code: "",
      password: "",
      repeat_password: "",
    },
  });

  const { mutate: resetPassword, isLoading: loading } =
    useConfirmForgotPasswordMutation();

  const handleSubmit = (values) => {
    const { email, code, password } = values;

    resetPassword(
      { email, code, password },
      {
        onSuccess: () => {
          Alert.success("Se cambió la contraseña con éxito");
          history.push(paths.login);
        },
      }
    );
  };

  return { form, loading, handleSubmit };
};

export default NewPasswordFormLogic;
