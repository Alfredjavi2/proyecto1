import { useGetRegionInformationQuery } from "@resources/Regions/Regions.queries";
import { LoggedUser } from "@resources/User/_exports";
import { useParams } from "react-router-dom";

const RegionsDetailLogic = () => {
  const { enterprise_id } = LoggedUser();
  const { id } = useParams();
  const region_id = id;

  const { data, isLoading } = useGetRegionInformationQuery({
    enterprise_id,
    region_id,
  });

  return { data, isLoading };
};

export default RegionsDetailLogic;
