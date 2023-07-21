import { Group as MantineGroup } from "@mantine/core";

const Group = ({ children, ...rest }) => {
  return <MantineGroup {...rest}>{children}</MantineGroup>;
};

export default Group;
