import React from "react";
import { Flex, Grid, GridCol } from "@components/_exports";
import mainImage from "@assets/images/homeIllustration.svg";

const HomeLayout = ({ children }) => {
  return (
    <Grid>
      <GridCol lg={6}>
        <Flex fullHeight>
          <img width={"80%"} alt="Bienvenido a Fructus Via" src={mainImage} />
        </Flex>
      </GridCol>
      <GridCol lg={6}>{children}</GridCol>
    </Grid>
  );
};

export default HomeLayout;
