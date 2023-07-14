import React from 'react'
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis
} from "recharts";
const data = [
    {
        name: "M",
        pv: 0,
    },
    {
        name: "T",
        pv: 11,
    },
    {
        name: "W",
        pv: 5,
    },
    {
        name: "T",
        pv: 5,
    },
    {
        name: "F",
        pv: 12,
    },
    {
        name: "S",
        pv: 7.5,
    },
    {
        name: "S",
        pv: 0,
    }
];

const AreaGraph = (props) => {
    return (
        <div className='area-graph'>
            <ResponsiveContainer
                width={128}
                height={80}
            >
                <AreaChart
                    data={data}
                    margin={{
                        // top: 80,
                        right: 5,
                        left: 5,
                        bottom: 0
                    }}
                    outerRadius={0}
                    innerRadius={0}
                    stroke={'red'}

                >
                    <XAxis dataKey="name" fontSize={'8px'} axisLine={false} tickLine={false} interval={0} />

                    <defs>
                        <linearGradient id={props.id ? props.id : 'gradient'} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={props.graph_color} stopOpacity={1} />
                            <stop offset="100%" stopColor={props.graph_color} stopOpacity={0.2} />
                        </linearGradient>
                    </defs>
                    <Area fillOpacity={1} stroke="transparent" type="linear" dataKey="pv" fill={`url(#${props.id ? props.id : 'gradient'})`} />
                </AreaChart>
            </ResponsiveContainer>
        </div >
    )
}

export default AreaGraph;