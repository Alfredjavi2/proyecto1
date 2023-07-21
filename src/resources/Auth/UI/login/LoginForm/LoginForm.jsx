import React from "react";
import { Group } from "@mantine/core";

import LoginFormLogic from "./LoginForm.logic";
import {
  Button,
  Flex,
  TextInput,
  PasswordInput,
  Link,
  ImageFooter,
  DualColorTitle,
} from "@components/_exports";
import paths from "@navigation/paths";

const LoginForm = () => {
  const { form, text, isLoading, handleLogin } = LoginFormLogic();

  return (
    <form style={{ height: "100dvh" }} onSubmit={form.onSubmit(handleLogin)}>
      <Flex fullHeight direction="column" justify="space-around">
        <DualColorTitle title="Bienvenido a Fructus Vía" />
        <TextInput
          withAsterisk
          label={text.email}
          placeholder="example@mail.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label={text.password}
          {...form.getInputProps("password")}
        />
        <Link text={text.f_pass} route={paths.forget} />

        <Group position="center">
          <Button loading={isLoading} type="submit">
            {text.login}
          </Button>
        </Group>
        <ImageFooter />
      </Flex>
    </form>
  );
};

export default LoginForm;
