import React from 'react'
import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
const data = [
  {
    name: "10am",
    pv: 14,
  },
  {
    name: "11am",
    pv: 11,
  },
  {
    name: "12am",
    pv: 18,
  },
  {
    name: "01pm",
    pv: 17,
  },
  {
    name: "02am",
    pv: 25,
  },
  {
    name: "03am",
    pv: 21,
  },
  {
    name: "04am",
    pv: 28,
  },
  {
    name: "05am",
    pv: 24,
  },
  {
    name: "06am",
    pv: 30,
  },
  {
    name: "07am",
    pv: 28,
  },
];
const AreaGraphPlain = (props) => {

  return (
    <div className='area-graph'>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 80,
            right: 0,
            left: 0,
            bottom: 8
          }}
          stroke={'red'}
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={props.graph_color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={props.graph_color} stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area fillOpacity={1} stroke="transparent" type="monotone" dataKey="pv" fill="url(#gradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div >
  )
}

export default AreaGraphPlain