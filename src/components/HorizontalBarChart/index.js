import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

function HorizontalBarChart({ data }) {
  const navigate = useNavigate();
  if (data) {
    const handleClick = (data, index) => {
      const { tooltipPayload } = data;
      const [elementInfo] = tooltipPayload;
      if (elementInfo) {
        const { unit: factoryID } = elementInfo;
        const monthID = index + 1;
        navigate(`details/${factoryID}/${monthID}`);
      }
    };

    return (
      <ResponsiveContainer width="100%" height="100%" minHeight={400}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Legend />
          <Bar
            dataKey="factory1"
            fill="red"
            name="Фабрика А"
            unit="1"
            onClick={handleClick}
          />
          <Bar
            dataKey="factory2"
            fill="blue"
            name="Фабрика Б"
            unit="2"
            onClick={handleClick}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return null;
}

export default HorizontalBarChart;
