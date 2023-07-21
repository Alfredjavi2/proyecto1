import { Loader } from "@components/_exports";
import GlobalQueryLoaderLogic from "./GlobalQueryLoader.logic";

const GlobalQueryLoader = () => {
  const { isLoading } = GlobalQueryLoaderLogic();

  return <Loader isLoading={isLoading} />;
};

export default GlobalQueryLoader;
