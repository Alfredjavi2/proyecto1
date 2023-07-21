import React from "react";
import { NumberInput as MantineNumberInput } from "@mantine/core";

const NumberInput = () => {
  return (
    <MantineNumberInput
      hideControls
      styles={{
        input: {
          width: "80px",
          height: "80px",
          textAlign: "center",
          padding: "10px",
          gap: "10px",
          borderColor: "#EB4B4B",
        },
      }}
    />
  );
};

export default NumberInput;
