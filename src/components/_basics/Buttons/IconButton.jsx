import React from "react";
import Button from "./Button";

const IconButton = ({
  Icon,
  size = 16,
  type = "button",
  onClick = () => null,
  loading,
  disabled,
  children,
  ...rest
}) => {
  return (
    <Button
      type={type}
      loading={loading}
      disabled={disabled}
      small
      leftIcon={Icon ? <Icon size={size} /> : <></>}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default IconButton;
