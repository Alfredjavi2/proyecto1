import { useQuery } from "@tanstack/react-query";
import {
  getRegionsService,
  getRegionInformationService,
} from "./Regions.services";

const keys = {
  dataTable: "regions-table",
  details: "regions-details",
};

//Table
export const useGetRegionsQuery = ({ enterprise_id }) =>
  useQuery([keys.dataTable, enterprise_id], () =>
    getRegionsService({ enterprise_id })
  );

//Details
export const useGetRegionInformationQuery = ({ enterprise_id, region_id }) =>
  useQuery(
    [keys.details, enterprise_id, region_id],
    () => getRegionInformationService({ enterprise_id, region_id }),
    { enabled: !!region_id }
  );
