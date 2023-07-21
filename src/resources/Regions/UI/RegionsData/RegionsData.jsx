import React from "react";
import { RegionsTable } from "@resources/Regions/_exports";

import { Container } from "@components/_exports";
import RegionsDataLogic from "./RegionsData.logic";

const RegionsData = () => {
  const { data, isLoading } = RegionsDataLogic();

  return (
    <Container size="xl">
      <Container mx="auto" maw={980}>
        <RegionsTable data={data} isLoading={isLoading} />
      </Container>
    </Container>
  );
};

export default RegionsData;
