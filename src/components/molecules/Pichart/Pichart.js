import React, { useState } from "react";
import { PieChart, Pie, Label, Legend, Cell } from "recharts";

const data = [
  { name: "Finished Training", value: 22, fill: "#B4CEFF" },
  { name: "Chapter A", value: 34, fill: "#B4CEFF" },
  { name: "Chapter B", value: 22, fill: "#B4CEFF" },
  { name: "Chapter C", value: 7, fill: "#B4CEFF" },
  { name: "Haven’t Started Yet", value: 20, fill: "#B4CEFF" },
];

const Pichart = () => {
  const [labelName, setLabelName] = useState(data[0].name);
  const [selectedSliceIndex, setSelectedSliceIndex] = useState(0);

  const handleClick = (data, index) => {
    setLabelName(data.name);
    setSelectedSliceIndex(index);
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    value,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fontWeight={index === selectedSliceIndex ? 700 : 500}
        fill="Black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {value}%
      </text>
    );
  };

  const renderCustomizedLabelLine = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }) => {
    if (index !== selectedSliceIndex) {
      return null; // Do not render label line for non-selected slices
    }
    const innerBorderX = cx + innerRadius * Math.cos(-midAngle * RADIAN);
    const innerBorderY = cy + innerRadius * Math.sin(-midAngle * RADIAN);

    // Calculate the coordinates for the arrowhead
    const arrowHeadX =
      innerBorderX +
      (outerRadius / 2.22 - innerRadius) * Math.cos(-midAngle * RADIAN);
    const arrowHeadY =
      innerBorderY +
      (outerRadius / 2.22 - innerRadius) * Math.sin(-midAngle * RADIAN);

    return (
      <polygon
        points={`${arrowHeadX - 8},${
          arrowHeadY + 8
        } ${arrowHeadX},${arrowHeadY} ${arrowHeadX + 8},${arrowHeadY + 8}`}
        fill="#000"
      />
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <PieChart width={278} height={278}>
        {/* <Legend verticalAlign="bottom"
                iconType="circle"
                iconSize={11}
                formatter={(value, entry, index) => <span style={{ color: 'black', fontSize: '14px' }}>{value}</span>}
                margin={{
                    bottom: 0
                }} /> */}

        <Pie
          data={data}
          innerRadius={60}
          outerRadius={135}
          dataKey="value"
          stroke="none"
          cornerRadius={0}
          onClick={handleClick}
          label={renderCustomizedLabel}
          labelLine={renderCustomizedLabelLine}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell
              fill={index === selectedSliceIndex ? "#B4CEFF" : "#fff"}
              stroke={
                index === selectedSliceIndex
                  ? "rgba(51, 51, 51, 0.10)"
                  : "rgba(51, 51, 51, 0.10)"
              }
              style={
                index === selectedSliceIndex
                  ? { filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }
                  : null
              }
            />
          ))}
          <Label
            width={50}
            value={labelName}
            position="center"
            className="label-center"
            fontWeight={500}
            fill="black"
            fontSize="18px"
          />
        </Pie>
      </PieChart>
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "118.549px",
          height: "118.549px",
          borderRadius: "100%",
          boxShadow: "0px 0px 11.21566104888916px 0px rgba(0, 0, 0, 0.25)",
        }}
      ></p>
    </div>
  );
};

export default Pichart;
