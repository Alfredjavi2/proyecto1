import {
  DualColorTitle,
  ImageFooter,
  Flex,
  Button,
  PasswordInput,
  TextInput,
  Link,
} from "@components/_exports";
import React from "react";
import NewPasswordFormLogic from "./NewPasswordForm.logic";
import paths from "@navigation/paths";

const NewPasswordForm = () => {
  const { form, loading, handleSubmit } = NewPasswordFormLogic();
  return (
    <form style={{ height: "100dvh" }} onSubmit={form.onSubmit(handleSubmit)}>
      <Flex direction="column" justify="space-around">
        <DualColorTitle title="Crea tu   contraseña" />
        <TextInput
          withAsterisk
          label={"Confirma tu correo"}
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label={"Ingresa el código"}
          {...form.getInputProps("code")}
        />
        <PasswordInput
          withAsterisk
          label={"Nueva Contraseña"}
          {...form.getInputProps("password")}
        />
        <PasswordInput
          withAsterisk
          label={"Confirmar tu contraseña"}
          {...form.getInputProps("repeat_password")}
        />
        <Button loading={loading} type="submit">
          Actualizar contraseña
        </Button>
        <Link text={"Volver a la pantalla de inicio"} route={paths.login} />
        <ImageFooter />
      </Flex>
    </form>
  );
};

export default NewPasswordForm;
