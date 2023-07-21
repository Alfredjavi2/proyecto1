import { joiResolver, useForm } from "@mantine/form";
import AuthValidator from "@resources/Auth/Auth.validator";
import { useHistory } from "react-router-dom";
import paths from "@navigation/paths";

const SendCodeFormLogic = () => {
  const history = useHistory();
  const form = useForm({
    validate: joiResolver(AuthValidator.sendCodeSchema),
    initialValues: {
      a: "",
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    history.push(paths.newPassword);
  };
  return { form, handleSubmit };
};

export default SendCodeFormLogic;
