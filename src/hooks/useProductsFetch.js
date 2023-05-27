import useSWR from "swr/immutable";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useProductsFetch = (currentFilter) => {
  const noFilter = currentFilter === "all";
  const fetchURL = noFilter
    ? "http://localhost:3001/products"
    : `http://localhost:3001/products?factory_id=${currentFilter}`;
  const { data, error, isLoading } = useSWR(fetchURL, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
