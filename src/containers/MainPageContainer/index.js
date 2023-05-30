import React, { useState } from "react";
import { useProductsFetch } from "../../hooks/useProductsFetch";
import Filter from "../../components/Filter";
import HorizontalBarChart from "../../components/HorizontalBarChart";

import "./styles.css";
import BorderedLayout from "../../layouts/BorderedLayout";
import createMainChartData from "../../utils/createMainChartData";

function MainPageContainer() {
  const savedFilter = localStorage.getItem("SAVED_FILTER") || "all";
  const [currentFilter, setCurrentFilter] = useState(savedFilter);
  const { data, isError, isLoading } = useProductsFetch(currentFilter);

  if (isError) return <h1 className="textCentered">Что-то пошло не так</h1>;

  if (isLoading) return <h1 className="textCentered">Загружаем...</h1>;

  if (data) {
    const chartData = createMainChartData(data, currentFilter);
    return (
      <>
        <Filter
          currentFilter={currentFilter}
          changeCurrentFilter={setCurrentFilter}
        />
        <div className="mainBlock">
          <BorderedLayout>
            <HorizontalBarChart
              data={chartData}
              currentFilter={currentFilter}
            />
          </BorderedLayout>
        </div>
      </>
    );
  }

  return null;
}

export default MainPageContainer;
