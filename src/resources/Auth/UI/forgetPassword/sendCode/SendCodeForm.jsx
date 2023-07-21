import {
  DualColorTitle,
  ImageFooter,
  Text,
  Link,
  Flex,
  Button,
  NumberInput,
  Group,
} from "@components/_exports";
import SendCodeFormLogic from "./SendCodeForm.logic";

const SendCodeForm = () => {
  const { form, handleSubmit } = SendCodeFormLogic();

  return (
    <form style={{ height: "100dvh" }} onSubmit={form.onSubmit(handleSubmit)}>
      <Flex>
        <NumberInput {...form.getInputProps("a")} />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
      </Flex>
      <Group>
        <Text
          fz={"xs"}
          children={"¿No recibiste el código?"}
          fw={500}
          lineClamp={3}
          color="#737373"
        />
        <Link text={"Click Aqui"} />
      </Group>

      <Button type="submit">Siguiente</Button>
      <ImageFooter />
    </form>
  );
};

export default SendCodeForm;
