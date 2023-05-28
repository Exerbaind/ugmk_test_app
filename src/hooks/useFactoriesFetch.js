import useSWR from "swr/immutable";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useFactoriesFetch = (factoryID, monthID) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/products?factory_id=${factoryID}&q=${monthID}/2022`,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};
