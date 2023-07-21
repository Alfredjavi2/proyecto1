import { Box as MantineBox } from "@mantine/core";
import React from "react";

const Box = ({ maw, mx, mt, children, ...rest }) => {
  return (
    <MantineBox maw={maw} mx={mx} mt={mt} {...rest}>
      {children}
    </MantineBox>
  );
};

export default Box;
