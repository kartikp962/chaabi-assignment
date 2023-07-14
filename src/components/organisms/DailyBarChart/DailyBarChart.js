import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./DailyBarChart.css";
const data = [
  {
    name: "S",
    pv: 30,
    amt: 40
  },
  {
    name: "M",
    pv: 50,
    amt: 50
  },
  {
    name: "T",
    pv: 40,
    amt: 50
  },
  {
    name: "W",
    pv: 60,
    amt: 60
  },
  {
    name: "T",
    pv: 40,
    amt: 50
  },
  {
    name: "F",
    pv: 70,
    amt: 60
  },
  {
    name: "S",
    pv: 50,
    amt: 40
  },
  {
    name: "M",
    pv: 30,
    amt: 30
  },
  {
    name: "T",
    pv: 50,
    amt: 40
  },
  {
    name: "W",
    pv: 40,
    amt: 40,
  },
];

const DailyBarChart = () => {
  return (
    <div className="DailyBarChart">
      <div className="flex-space">
        <p className="graph-title">Daily Training Completions</p>
        <p
          style={{ color: "#0F2552", fontWeight: 400 }}
          className="graph-title"
        >
          Last 7 Days
        </p>
      </div>
      <ResponsiveContainer width="100%" height={215}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: -3,
            left: -5,
            bottom: -10,
          }}
          barSize={8.7}
        >
          <CartesianGrid strokeDasharray="3 0" horizontal vertical={false} />
          <XAxis
            dataKey="name"
            fontSize={"12px"}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Bar dataKey="pv" stackId="a" fill="#0D62FF" />
          <Bar
            dataKey="amt"
            stackId="a"
            fill="#E7EFFF"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyBarChart;
