import useSWR from "swr/immutable";
import { fetcher } from "../utils/fetcher";

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
