import { joiResolver, useForm } from "@mantine/form";
import AuthValidator from "@resources/Auth/Auth.validator";
import { useForgotPasswordMutation } from "@resources/Auth/Auth.queries";
import { useHistory } from "react-router-dom";
import paths from "@navigation/paths";

const ForgetFormLogic = () => {
  const history = useHistory();
  const form = useForm({
    validate: joiResolver(AuthValidator.forgetPasswordSchema),
    initialValues: {
      email: "",
    },
  });
  const { mutate: forgotPassword, isLoading } = useForgotPasswordMutation();

  const handleSubmit = (value) => {
    forgotPassword(value, {
      onSuccess: (response) => history.push(paths.newPassword),
    });
  };
  return { form, isLoading, handleSubmit };
};

export default ForgetFormLogic;
