import React from "react";
import ProfileFormLogic from "./ProfileForm.logic";
import {
  Loader,
  TextInput,
  ImageUploader,
  Group,
  Text,
  Card,
  PageTitle,
  IconButton,
} from "@components/_exports";
import StopEditButton from "../ProfileButtons/StopEditProfile";
import Icons from "@infra/Icons";

const ProfileForm = ({ userData }) => {
  const { form, text, isLoading, handleUserPhotoChange, handleModifyProfile } =
    ProfileFormLogic({
      userData,
    });

  return (
    <>
      <span>
        <PageTitle title="Editar Perfil" />
        <StopEditButton />
      </span>

      <Card>
        <form onSubmit={form.onSubmit(handleModifyProfile)}>
          {/*-------- Image Profile --------*/}
          <Group position="left" pl={50}>
            <ImageUploader
              alt="profile_photo"
              src={userData?.profile_photo}
              onURLChange={handleUserPhotoChange}
            />
            <Text fz={25} fw={700} ml={20}>
              {userData?.name} {userData?.last_name}
            </Text>
          </Group>

          {/*-------- Inputs --------*/}
          <Group position="left" pl={50} pr={50} mb={10} grow>
            <TextInput
              withAsterisk
              label={text.name}
              placeholder="Ingresa tu nombre"
              {...form.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              label={text.last_name}
              placeholder="Ingresa tu apellido"
              {...form.getInputProps("last_name")}
            />
          </Group>
          <Group position="left" pl={50} pr={50} mb={10}>
            <TextInput
              withAsterisk
              label={text.personal_phone}
              placeholder="Ingresa tu teléfono"
              {...form.getInputProps("personal_phone")}
            />
            <></>
          </Group>
          {/*-------- Button Save --------*/}
          <Group position="left" pl={50} pr={50} mb={10}>
            <IconButton
              Icon={Icons.icon_save}
              loading={isLoading}
              type="submit"
            >
              {text.save}
            </IconButton>
          </Group>
          {/*-------- Loader --------*/}
          <Loader isLoading={isLoading} />
        </form>
      </Card>
    </>
  );
};

export default ProfileForm;
