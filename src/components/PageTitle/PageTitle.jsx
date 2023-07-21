import React from "react";
import { Text } from "@components/_exports";

const PageTitle = ({ title = "" }) => {
  return (
    <Text fz={25} fw={700} mb={20}>
      {title}
    </Text>
  );
};

export default PageTitle;
