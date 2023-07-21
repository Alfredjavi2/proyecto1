import React from "react";
import { Button as MantineButton } from "@mantine/core";

const Button = ({
  onClick = () => null,
  type = "button",
  small = false,
  disabled = false,
  loading = false,
  children,
  ...rest
}) => {
  return (
    <MantineButton
      disabled={disabled}
      loading={loading}
      sx={{
        padding: small ? "6px 22px" : "",
        borderRadius: "10px",
      }}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
