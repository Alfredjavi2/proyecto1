import React from "react";
import ProfileViewDataLogic from "./ProfileViewData.logic";
import { Group, Image, Flex, Text, Card } from "@components/_exports";

const ProfileViewData = ({ userData }) => {
  const { text } = ProfileViewDataLogic({
    userData,
  });

  return (
    <Card>
      <Group position="center">
        {/*-------- Image Profile --------*/}
        <Flex wrap="wrap-reverse" justify="center" align="center">
          <Image
            width={140}
            height={140}
            src={userData?.profile_photo}
            alt="profile_photo"
            circle
          />
        </Flex>

        <Flex
          direction="column"
          wrap="wrap-reverse"
          justify="center"
          align="center"
        >
          <Text fz={25} fw={700} ml={20}>
            {userData?.name} {userData?.last_name}
          </Text>
          <Flex
            gap={1}
            direction="column"
            wrap="wrap-reverse"
            justify="flex-end"
            align="flex-end"
          >
            <Group>
              <Text ml={20}>
                {text.personal_phone}: {userData?.personal_phone}
              </Text>
            </Group>
            <Group>
              <Text ml={20}>
                {text.email}: {userData?.email}
              </Text>
            </Group>
          </Flex>
        </Flex>
      </Group>
    </Card>
  );
};

export default ProfileViewData;
