import React from "react";
import { IconButton } from "@components/_exports";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "@infra/_exports";
import {
  start_editing,
  store_is_editing,
} from "@resources/Profile/Profile.store";

const EditProfile = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector(store_is_editing);

  const onStartEditing = () => dispatch(start_editing());

  return !isEditing ? (
    <IconButton Icon={Icons.icon_edit} onClick={onStartEditing}>
      Editar
    </IconButton>
  ) : null;
};

export default EditProfile;
