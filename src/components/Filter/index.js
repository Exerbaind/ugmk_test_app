import React from "react";
import BorderedLayout from "../../layouts/BorderedLayout";

import "./styles.css";

const optionsList = [
  {
    text: "Все продукты",
    value: "all",
  },
  {
    text: "Продукт 1",
    value: 1,
  },
  {
    text: "Продукт 2",
    value: 2,
  },
];

const handleChange = (event, changeCurrentFilter) => {
  const filterValue = event.target.value;
  localStorage.setItem("SAVED_FILTER", filterValue);
  changeCurrentFilter(filterValue);
};

const renderOptions = (item) => {
  const { text, value } = item;
  const optionProps = {
    value,
    key: `${text}_${value}`,
  };

  return <option {...optionProps}>{text}</option>;
};

function Filter({ changeCurrentFilter, currentFilter }) {
  return (
    <BorderedLayout>
      <div className="filter">
        <p className="filterText">Фильтр по типу продукции</p>
        <select
          value={currentFilter}
          onChange={(event) => handleChange(event, changeCurrentFilter)}
        >
          {optionsList.map(renderOptions)}
        </select>
      </div>
    </BorderedLayout>
  );
}

export default Filter;
