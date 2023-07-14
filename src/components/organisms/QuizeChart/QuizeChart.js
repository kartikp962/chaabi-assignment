import React from 'react'
import './QuizeChart.css'

import { PieChart, Pie } from "recharts";

const data = [
    { name: "Passed", value: 50, fill: '#018E42' },
    { name: "Failed", value: 30, fill: '#ED1C24' },
];
const QuizeChart = () => {
    return (
        <div className='QuizeChart'>
            <p className='graph-title'>Quiz Passing %</p>
            <div className='flex-align gap-15'>
                <PieChart width={200} height={200} >
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={95}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={0}
                    >

                    </Pie>
                </PieChart>
                <div className='legends'>
                    <div className='flex-align gap-10 legend'>
                        <div style={{ background: '#018E42' }} className='dot'></div>
                        <div className='details'><h3>passed</h3> <small>1423 Workers</small> </div>
                    </div>
                    <div className='flex-align gap-10 legend'>
                        <div style={{ background: '#ED1C24' }} className='dot'></div>
                        <div className='details'><h3>failed</h3> <small>134 Workers</small> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizeChart