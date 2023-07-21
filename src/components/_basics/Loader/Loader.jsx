import React from "react";
import { Loader as MantineLoader } from "@mantine/core";

const Loader = ({ isLoading, size = 28, ...rest }) => {
  return isLoading ? (
    <MantineLoader variant="dots" size={size} {...rest} />
  ) : null;
};

export default Loader;
