import LoggedUser from "@resources/User/LoggedUser";
import { API } from "@infra/_exports";

export const uploadPhoto = async ({ file }) => {
  const { enterprise_id } = LoggedUser();
  const format = file?.type?.replace("image/", "");

  const url = `/enterprise/${enterprise_id}/upload`;

  const { data: uploadConfig } = await API.post(url, { format });

  const { image_url, upload_url } = uploadConfig?.item;

  // Second request
  const { url: uploadURL, fields } = upload_url;

  let formData = new FormData();
  formData.append("Content-Type", fields["Content-Type"]);
  formData.append("key", fields["key"]);
  formData.append("file", file);
  formData.append("AWSAccessKeyId", fields["AWSAccessKeyId"]);
  formData.append("policy", fields["policy"]);
  formData.append("signature", fields["signature"]);

  // TODO catch error and restore previous photo/url
  await API.postMultipartWithoutBaseURL(uploadURL, formData);
  return image_url;
};
