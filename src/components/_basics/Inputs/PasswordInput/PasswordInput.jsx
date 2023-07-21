import React from "react";
import { PasswordInput as MantinePasswordInput } from "@mantine/core";

const PasswordInput = ({ withAsterisk, label, width = "80%", ...rest }) => {
  return (
    <MantinePasswordInput
      sx={(theme) => ({
        width,
        ".mantine-PasswordInput-input": {
          borderRadius: theme.radius.md,
          boxShadow: theme.shadows.xs,
        },
      })}
      withAsterisk={withAsterisk}
      label={label}
      {...rest}
    />
  );
};

export default PasswordInput;
