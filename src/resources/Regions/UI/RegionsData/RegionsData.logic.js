import { useGetRegionsQuery } from "@resources/Regions/Regions.queries";
import { LoggedUser } from "@resources/User/_exports";

const RegionsDataLogic = () => {
  const { enterprise_id } = LoggedUser();

  const { data, isLoading } = useGetRegionsQuery({
    enterprise_id,
  });

  return { data, isLoading };
};

export default RegionsDataLogic;
