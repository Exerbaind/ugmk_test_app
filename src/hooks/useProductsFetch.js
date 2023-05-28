import useSWR from "swr/immutable";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useProductsFetch = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/products",
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};