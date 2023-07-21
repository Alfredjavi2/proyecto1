import React from "react";
import { Button } from "@components/_exports";
import { useDispatch, useSelector } from "react-redux";
import {
  stop_editing,
  store_is_editing,
} from "@resources/Profile/Profile.store";
const StopEditProfile = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector(store_is_editing);

  const onStopEditing = () => dispatch(stop_editing());

  return isEditing ? <Button onClick={onStopEditing}>Cancelar</Button> : null;
};

export default StopEditProfile;
