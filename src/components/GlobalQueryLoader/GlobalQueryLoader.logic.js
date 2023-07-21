import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const GlobalQueryLoaderLogic = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const isLoading = isFetching > 0 || isMutating > 0;

  return { isLoading };
};

export default GlobalQueryLoaderLogic;
