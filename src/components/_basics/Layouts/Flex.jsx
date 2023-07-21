import React from "react";
import { Flex as MantineFlex } from "@mantine/core";

const Flex = ({
  justify = "center",
  align = "center",
  direction = "row",
  wrap = "wrap",
  gap = "md",
  fullWidth = false,
  fullHeight = false,
  children,
  ...rest
}) => {
  return (
    <MantineFlex
      sx={{
        width: fullWidth ? "100%" : "inherit",
        height: fullHeight ? "100%" : "inherit",
      }}
      gap={gap}
      justify={justify}
      align={align}
      direction={direction}
      wrap={wrap}
      {...rest}
    >
      {children}
    </MantineFlex>
  );
};

export default Flex;
