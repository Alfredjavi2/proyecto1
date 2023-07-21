import { Grid as MantineGrid } from "@mantine/core";
import React from "react";

const GridCol = ({ xs = 0, sm = 0, md = 0, lg = 0, children }) => {
  return (
    <MantineGrid.Col xs={xs} sm={sm} md={md} lg={lg}>
      {children}
    </MantineGrid.Col>
  );
};

export default GridCol;
