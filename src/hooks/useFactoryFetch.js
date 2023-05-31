import useSWR from "swr/immutable";
import { fetcher } from "../utils/fetcher";

export const useFactoryFetch = (factoryID, monthID) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/products?factory_id=${factoryID}&q=/${monthID}/2022`,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};
