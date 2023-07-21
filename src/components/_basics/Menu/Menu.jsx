import React from "react";
import { Menu as MantineMenu } from "@mantine/core";

const Menu = ({
  target,
  targetClassName,
  offset = 0,
  position = "right-start",
  children,
  ...rest
}) => {
  return (
    <MantineMenu position={position} offset={offset} {...rest}>
      <MantineMenu.Target className={targetClassName}>
        {target}
      </MantineMenu.Target>

      <MantineMenu.Dropdown
        p={0}
        mt={25}
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[3],
          borderRadius: 0,
        })}
      >
        {children}
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
};

export default Menu;
