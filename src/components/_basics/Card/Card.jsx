import React from "react";
import { Card as MantineCard } from "@mantine/core";

const Card = ({ children }) => {
  return (
    <MantineCard
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[1],
      })}
      shadow="sm"
      padding="lg"
      radius="md"
    >
      {children}
    </MantineCard>
  );
};

export default Card;
