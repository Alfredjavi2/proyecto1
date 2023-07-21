import { Button } from "@mantine/core";

const ButtonGroup = ({ orientation, children, ...rest }) => {
  return (
    <Button.Group orientation={orientation} {...rest}>
      {children}
    </Button.Group>
  );
};

export default ButtonGroup;
