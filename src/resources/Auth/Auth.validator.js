import Joi from "joi";

const AuthValidator = (function () {
  const loginSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .message("Invalid email"),
    password: Joi.string()
      .min(6)
      .message("Password should have at least 6 characters"),
  });

  const forgetPasswordSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .message("Correo inválido"),
  });

  const sendCodeSchema = Joi.object({
    a: Joi.number().min(0).max(9).integer(),
  });

  const newPasswordSchema = Joi.object({
    password: Joi.string()
      .min(8)
      .message("El password debe ser de al menos 8 caracteres"),
    repeat_password: Joi.ref("password"),
    code: Joi.string().length(6).message("El código es de 6 dígitos"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .message("Correo inválido"),
  });

  return {
    loginSchema,
    forgetPasswordSchema,
    sendCodeSchema,
    newPasswordSchema,
  };
})();

export default AuthValidator;
