import ProfileForm from "./UI/ProfileForm/ProfileForm";
import ProfileData from "./UI/ProfileData/ProfileData";
import ProfileViewData from "./UI/ProfileViewData/ProfileViewData";

import profile_reducer, {
  start_editing,
  stop_editing,
  sliceName,
  store_is_editing,
} from "./Profile.store";

export {
  ProfileForm,
  ProfileData,
  ProfileViewData,
  // Profile store
  profile_reducer,
  start_editing,
  stop_editing,
  sliceName,
  store_is_editing,
};
