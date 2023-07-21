import { API } from "@infra/_exports";

//Table
export async function getRegionsService({ enterprise_id }) {
  const url = `/enterprise/${enterprise_id}/regions`;
  const { data } = await API.get(url);
  return data?.item;
}

//Details
export async function getRegionInformationService({
  enterprise_id,
  region_id,
}) {
  const url = `/enterprise/${enterprise_id}/regions/${region_id}`;
  const { data } = await API.get(url);
  return data?.item;
}
