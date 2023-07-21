import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  loginService,
  getExecutiveProfileService,
  modifyProfileService,
  forgotPasswordService,
  confirmForgotPasswordService,
} from "./Auth.services";

import { Alert } from "@infra/_exports";
import UserModel from "@resources/User/User.class";

const keys = {
  profile: "auth-profile",
};

export const useLoginMutation = () =>
  useMutation(({ email, password }) => loginService({ email, password }), {
    onSuccess: (response) => {
      const user = new UserModel(response.user);
      if (user.isExecutive()) {
        Alert.success("Successful login");
      }
    },
  });

// TODO move to resources/Profile
// TODO Update current logged user data after retrieving this info
export const useGetExecutiveProfileQuery = ({ enterprise_id, user_id }) =>
  useQuery([keys.profile, enterprise_id, user_id], () =>
    getExecutiveProfileService({ enterprise_id, user_id })
  );

//Modify Profile invalidateQueries
export const useModifyProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ enterprise_id, user_id, dataUser }) =>
      modifyProfileService({ enterprise_id, user_id, dataUser }),
    {
      onSuccess: (response, request) => {
        Alert.success("Profile updated");
        queryClient.invalidateQueries([
          keys.profile,
          request.enterprise_id,
          request.user_id,
        ]);
      },
    }
  );
};

// Password recovery

export const useForgotPasswordMutation = () =>
  useMutation(({ email }) => forgotPasswordService({ email }));

export const useConfirmForgotPasswordMutation = () =>
  useMutation(({ email, password, code }) =>
    confirmForgotPasswordService({ email, password, code })
  );
