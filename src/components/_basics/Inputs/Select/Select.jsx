import React from "react";
import { Select as MantineSelect } from "@mantine/core";

const Select = ({
  label,
  placeholder,
  options = [],
  value,
  width,
  onChange = () => null,
  ...rest
}) => {
  return (
    <MantineSelect
      sx={{ width: width || "" }}
      maxLength=""
      value={value}
      onChange={onChange}
      data={options}
      label={label}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Select;
