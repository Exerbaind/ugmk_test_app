import React from "react";
import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["rgb(54, 124, 33)", "rgb(201, 140, 49)"];

function PieChart({ data }) {
  if (data) {
    return (
      <ResponsiveContainer width="100%" height="70%">
        <PieChartComponent>
          <Pie
            data={data}
            labelLine={false}
            label
            outerRadius="90%"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" />
        </PieChartComponent>
      </ResponsiveContainer>
    );
  }

  return null;
}

export default PieChart;
