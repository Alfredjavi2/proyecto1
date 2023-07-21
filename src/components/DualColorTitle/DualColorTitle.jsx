import Colors from "@infra/Colors";
import { Title } from "@mantine/core";
import React from "react";

const DualColorTitle = ({ title }) => {
  const { part1, part2 } = divideTitle(title);

  return (
    <span style={{ textAlign: "center" }}>
      <Title
        sx={{
          color: Colors._green1,
        }}
      >
        {part1}
      </Title>
      <Title
        sx={{
          color: Colors._orange1,
        }}
      >
        {part2}
      </Title>
    </span>
  );
};

export default DualColorTitle;

const divideTitle = (title) => {
  let m = Math.ceil(title.length / 2);
  const part1 = title.slice(0, m);
  const part2 = title.slice(m, title.length);

  return {
    part1,
    part2,
  };
};
