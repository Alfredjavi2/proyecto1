import { TextInput as MantineTextInput } from "@mantine/core";
import React from "react";

const TextInput = ({
  label,
  placeholder,
  withAsterisk,
  width = "80%",
  ...rest
}) => {
  return (
    <MantineTextInput
      sx={(theme) => ({
        width,
        input: {
          borderRadius: theme.radius.md,
          boxShadow: theme.shadows.xs,
        },
      })}
      withAsterisk={withAsterisk}
      label={label}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInput;
