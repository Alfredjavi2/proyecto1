import { Container as MantineContainer } from "@mantine/core";
import React from "react";

const Container = ({ mt, children, ...rest }) => {
  return (
    <MantineContainer mt={mt} {...rest}>
      {children}
    </MantineContainer>
  );
};

export default Container;
