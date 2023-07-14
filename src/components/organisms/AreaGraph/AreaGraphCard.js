import React from 'react'
import AreaGraph from '../../molecules/AreaGraph/AreaGraph'
import { TrendUpIcon } from '../../../assets/Icons'
import './AreaGraphCard.css'

const AreaGraphCard = (props) => {
    const { heading, countH1, percentage, number, graph_color, bg } = props
    return (
        <div className='AreaGraphCard'>
            <p className='graph-title'>{heading}</p>
            <div className='flex-space gap-10'>
                <div>
                    <h1>{countH1}</h1>
                    <p className='flex-align gap-10'>
                        <span style={{ background: bg }} className='flex-align percentage-pill'>
                            <TrendUpIcon color={graph_color} /> <span style={{ color: graph_color }}>{percentage}</span>
                        </span>
                        <span className='number'>{number} </span>
                    </p>
                </div>
                <AreaGraph
                    graph_color={graph_color}
                    id={props.id}
                />
            </div>
        </div>
    )
}

export default AreaGraphCard