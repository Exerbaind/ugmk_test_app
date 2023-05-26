import React, { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../utils/api/fetchProducts";

export const AppContext = createContext();

const defaultState = {
  data: null,
  currentFilter: "all",
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const savedFilter = localStorage.getItem("SAVED_FILTER");
    if (savedFilter) {
      setState({ ...state, currentFilter: savedFilter });
    }
  }, []);

  const getProducts = async () => {
    const data = await fetchProducts();
    setState({ ...state, data });
  };

  const changeCurrentFilter = (currentFilter) => {
    localStorage.setItem("SAVED_FILTER", currentFilter);
    setState({ ...state, currentFilter });
  };

  return (
    <AppContext.Provider
      value={{
        data: state.data,
        currentFilter: state.currentFilter,
        getProducts,
        changeCurrentFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
