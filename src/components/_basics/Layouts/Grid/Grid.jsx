import React from "react";
import { Grid as MantineGrid } from "@mantine/core";

const Grid = ({ gutter = 0, grow, children }) => {
  return (
    <div>
      <MantineGrid gutter={gutter} grow={grow}>
        {children}
      </MantineGrid>
    </div>
  );
};

export default Grid;
