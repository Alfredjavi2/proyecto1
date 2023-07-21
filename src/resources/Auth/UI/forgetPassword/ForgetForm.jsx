import {
  Button,
  TextInput,
  Link,
  Flex,
  DualColorTitle,
  Text,
  ImageFooter,
} from "@components/_exports";
import React from "react";
import paths from "@navigation/paths";
import { Stack } from "@mantine/core";
import ForgetFormLogic from "./ForgetForm.logic";

const ForgetForm = () => {
  const { form, isLoading, handleSubmit } = ForgetFormLogic();

  return (
    <form style={{ height: "100dvh" }} onSubmit={form.onSubmit(handleSubmit)}>
      <Flex direction="column" justify="space-around">
        <DualColorTitle title="Ingresa tu   correo" />
        <Text
          fz={"md"}
          sx={{ maxWidth: "340px", textAlign: "center" }}
          fw={500}
        >
          Te enviáremos un código a tu correo electrónico para restablecer tu
          contraseña
        </Text>

        <TextInput
          withAsterisk
          label={"Correo"}
          placeholder="Ingresa tu correo"
          {...form.getInputProps("email")}
        />
        <Link text={"Ya tengo un código"} route={paths.newPassword} />

        <Stack align="center">
          <Button loading={isLoading} type="submit">
            Enviar correo
          </Button>
          <Link text={"Volver a la pantalla de inicio"} route={paths.login} />
        </Stack>
        <ImageFooter />
      </Flex>
    </form>
  );
};

export default ForgetForm;
