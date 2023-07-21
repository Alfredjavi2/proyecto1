import { API } from "@infra/_exports";

//loginService
export async function loginService({ email, password }) {
  const url = "/login";
  const { data } = await API.post(url, { email, password });
  return data?.item;
}

// TODO move to resources/Profile
export async function getExecutiveProfileService({ enterprise_id, user_id }) {
  const url = `/enterprise/${enterprise_id}/user/${user_id}`;
  const { data } = await API.get(url);
  return data?.item;
}

//Modify Profile
export async function modifyProfileService({
  enterprise_id,
  user_id,
  dataUser,
}) {
  const url = `/enterprise/${enterprise_id}/user/${user_id}`;
  const { data } = await API.put(url, dataUser);
  return data;
}

// Password recovery

export async function forgotPasswordService({ email }) {
  const url = "/forgotpassword";
  const { data } = await API.post(url, { email });
  return data?.item;
}

export async function confirmForgotPasswordService({ email, password, code }) {
  const url = "/confirmpassword";
  const { data } = await API.put(url, { email, password, code });
  return data?.item;
}
