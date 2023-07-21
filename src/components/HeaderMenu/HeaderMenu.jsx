import React, { useState } from "react";
import { Menu, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";

import Auth from "@infra/Auth";
import Icons, { MyIcon } from "@infra/Icons";
import { Image, Text } from "@components/_exports";
import paths from "@navigation/paths";

const HeaderMenu = () => {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const ChevronIcon = Icons.icon_CheDown;
  const { name, last_name, profile_photo } = Auth.getLoggedUser();

  return (
    <Menu
      position="bottom-end"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      opened={userMenuOpened}
    >
      <Menu.Target>
        <UnstyledButton>
          <div>
            <Image
              width={20}
              height={20}
              src={profile_photo}
              alt="profile_photo"
              circle
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={1}>
              {name} {last_name}
            </Text>
            <ChevronIcon size="1rem" stroke={1.5} />
          </div>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Link to={paths.logout}>
            <MyIcon icon={Icons.icon_logout} size="0.9rem" stroke={1.5} />
            <span>{paths.names.logout}</span>
          </Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderMenu;
