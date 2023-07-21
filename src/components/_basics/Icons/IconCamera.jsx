import { ThemeIcon } from "@mantine/core";
import { IconCamera as MantineIconCamera } from "@tabler/icons-react";

const IconCamera = ({ size, ...rest }) => {
  return (
    <ThemeIcon radius="xl" color="#09868F">
      <MantineIconCamera size={size} />
    </ThemeIcon>
  );
};

export default IconCamera;
