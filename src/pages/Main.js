import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import MainChart from "../components/MainChart";

function Main() {
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    const savedFilter = localStorage.getItem("SAVED_FILTER");
    if (savedFilter) {
      setCurrentFilter(savedFilter);
    }
  }, []);
  return (
    <>
      <Filter
        currentFilter={currentFilter}
        changeCurrentFilter={setCurrentFilter}
      />
      <MainChart currentFilter={currentFilter} />
    </>
  );
}

export default Main;
