import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Burger, Header } from "@mantine/core";
import LOGO_FV from "@assets/images/LOGO_FV.svg";

import { HeaderMenu, Image } from "@components/_exports";
import { store_navbar_open, toggle_navbar_open } from "@store/layout";
import { useStyles } from "./Styles/Header.styles";

const HeaderComponent = () => {
  const open = useSelector(store_navbar_open);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(toggle_navbar_open());

  const { classes } = useStyles();

  return (
    <Header className={classes.header} height={{ base: 45 }} p="xl">
      <div>
        <Burger
          opened={open}
          onClick={handleOpen}
          size="sm"
          className={classes.burger}
        />

        <Image src={LOGO_FV} height={50} />
        <HeaderMenu />
      </div>
    </Header>
  );
};

export default HeaderComponent;
