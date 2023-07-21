import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, ScrollArea, Collapse } from "@mantine/core";
import { Image } from "@components/_exports";
import image13_navbar from "@assets/images/image13_navbar.svg";

import { Icons } from "@infra/_exports";
import { menu } from "@navigation/_exports";
import { useStyles } from "@layout/Styles/Navbar.styles";
import { store_navbar_open, toggle_navbar_open } from "@store/layout";

const NavbarComponent = () => {
  const { classes, cx } = useStyles();
  const location = useLocation();

  const active = useMemo(() => location.pathname, [location.pathname]);

  const dispatch = useDispatch();
  const isOpen = useSelector(store_navbar_open);
  const handleClose = () => isOpen && dispatch(toggle_navbar_open());

  // Map elements from navigation/menu
  const links = menu.map((item, index) => (
    <div key={index} className={classes.border}>
      {item.isSection ? (
        <LinksGroup links={item.subMenu} icon={item.icon} label={item.label} />
      ) : (
        <Link
          className={cx(classes.link, {
            [classes.linkActive]: active.includes(item.path),
          })}
          onClick={handleClose}
          to={item?.path}
        >
          {item?.icon && (
            <item.icon className={classes.linkIcon} stroke={1.5} />
          )}
          <span>{item?.label}</span>
        </Link>
      )}
    </div>
  ));

  return (
    <Navbar
      className={classes.navbar}
      width={{ sm: 190, md: 220 }}
      hidden={!isOpen}
      hiddenBreakpoint="sm"
    >
      <Navbar.Section grow component={ScrollArea}>
        <ScrollArea
          scrollHideDelay={200}
          offsetScrollbars={false}
          style={{
            borderBottom: `2px solid #479A66`,
          }}
        >
          {links}
        </ScrollArea>
      </Navbar.Section>

      <Image src={image13_navbar} />
    </Navbar>
  );
};

export default NavbarComponent;

function LinksGroup({ links, icon: Icon, label }) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(false);
  const ChevronIcon =
    theme.dir === "ltr" ? Icons.icon_CheRight : Icons.icon_CheLeft;

  const items = (hasLinks ? links : []).map((item, index) => (
    <Link
      className={`${classes.link} ${classes.sub_link}`}
      to={item?.path}
      key={index}
    >
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <>
      <span className={classes.link} onClick={() => setOpened((o) => !o)}>
        <Icon className={classes.linkIcon} stroke={1.5} />
        <span>{label}</span>
        {hasLinks && (
          <ChevronIcon
            className={classes.chevron}
            size="1rem"
            stroke={1.5}
            style={{
              transform: opened
                ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                : "none",
            }}
          />
        )}
      </span>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
