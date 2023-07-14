import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Rectangle,
  Cell,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./BiWeekBarChart.css";

const data = [
    {
      name: "3 Jun",
      pv: 100,
    },
    {
      name: "4 Jun",
      pv: 120,
    },
    {
      name: "5 Jun",
      pv: 120,
    },
    {
      name: "6 Jun",
  
      pv: 220,
    },
    {
      name: "7 Jun",
  
      pv: 260,
    },
    {
      name: "8 Jun",
      pv: 200,
    },
    {
      name: "9 Jun",
      pv: 220,
    },
    {
      name: "10 Jun",
      pv: 100,
    },
    {
      name: "11 Jun",
      pv: 280,
    },
    {
      name: "12 Jun",
      pv: 340,
    },
    {
      name: "13 Jun",
      pv: 380,
    },
    {
      name: "14 Jun",
      pv: 400,
    },
  ];

const BiWeekBarChart = () => {
  return (
    <div className="BiWeekBarChart">
      <div className="flex-space">
        <p className="graph-title">Last 14 Days Active Workers In Training</p>
        <p style={{ fontWeight: 400 }} className="graph-title">
          Last 14 Days
        </p>
      </div>
      <ResponsiveContainer width="100%" height={313}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: -10,
          }}
          barSize={18}
        >
          <XAxis
            dataKey="name"
            fontSize={"12px"}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis axisLine={false} tickLine={false} domain={[0, 400]} />
          <Bar
            dataKey="pv"
            shape={<Rectangle radius={[50, 50, 50, 50]} />}
            background={{ fill: "#E7EFFF", radius: [50, 50, 50, 50] }}
          >
            {data.map((entry, index) => (
              <Cell fill={"#1B59F8"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BiWeekBarChart;
