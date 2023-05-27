import React from "react";
import { useProductsFetch } from "../../hooks/useProductsFetch";

function MainChart({ currentFilter }) {
  const { data } = useProductsFetch(currentFilter);
  console.log(data);
  return <div>MainChart</div>;
}

export default MainChart;
