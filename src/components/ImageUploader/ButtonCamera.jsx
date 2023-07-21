import { ButtonGroup, IconCamera, Menu } from "@components/_exports";
import { Button } from "@mantine/core";

const ButtonCamera = ({ handleUpload = () => null, ...rest }) => {
  return (
    <Menu
      targetClassName="button-camera"
      offset={"-1rem"}
      target={
        <Button variant="transparent">
          <IconCamera size={20} />
        </Button>
      }
    >
      <ButtonGroup orientation="vertical">
        <Button variant="subtle" color="dark" radius={0}>
          Tomar foto
        </Button>
        <Button variant="subtle" color="dark" radius={0} onClick={handleUpload}>
          Subir foto
        </Button>
        <Button variant="subtle" color="dark" radius={0}>
          Eliminar foto
        </Button>
      </ButtonGroup>
    </Menu>
  );
};

export default ButtonCamera;
