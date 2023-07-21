import { Text as MantineText } from "@mantine/core";

const Text = ({ fz, children, ...rest }) => {
  return (
    <MantineText fz={fz} {...rest}>
      {children}
    </MantineText>
  );
};

export default Text;
