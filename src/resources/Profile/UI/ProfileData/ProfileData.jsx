import React from "react";
//Button
import EditProfileButton from "../ProfileButtons/EditProfile";

import { ProfileForm } from "@resources/Profile/_exports";
import { ProfileViewData } from "@resources/Profile/_exports";
import ProfileDataLogic from "./ProfileData.logic";

import { Container } from "@components/_exports";

const ProfileData = () => {
  const { data, isEditing } = ProfileDataLogic();

  return (
    <Container size="xl">
      <Container mx="auto" maw={980}>
        <EditProfileButton />
        {isEditing ? (
          <ProfileForm userData={data?.user} />
        ) : (
          <ProfileViewData userData={data?.user} />
        )}
      </Container>
    </Container>
  );
};

export default ProfileData;
