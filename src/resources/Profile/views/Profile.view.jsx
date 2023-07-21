import React, { useEffect } from "react";
import { ProfileData, stop_editing } from "@resources/Profile/_exports";
import { useDispatch } from "react-redux";

const Profile = () => {
  // stop_editing si sale de la vista de perfil
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(stop_editing());
  }, [dispatch]);

  return <ProfileData />;
};

export default Profile;
