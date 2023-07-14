import React from 'react'
import AreaGraphCard from '../../organisms/AreaGraph/AreaGraphCard'
import './StatsAreaGraps.css'
const StatsAreaGraps = () => {
    return (
        <div className='StatsAreaGraps-main'>
            <div className='StatsAreaGraps'>
                <AreaGraphCard
                    countH1={'3,354'}
                    percentage={'20%'}
                    number={'234'}
                    heading='In Training Workers'
                    graph_color={'#018E42'}
                    bg={'rgba(1, 142, 66, 0.1)'}
                />
            </div>
            <div className='StatsAreaGraps'>
                <AreaGraphCard
                    countH1={'2,433'}
                    percentage={'20%'}
                    number={'435'}
                    heading='Video Watch-Time (Hrs)'
                    graph_color={'#ED1C24'}
                    bg={'rgba(237, 28, 36, 0.10)'}
                    id='fcghjbjk'
                />
            </div>
            <div className='flex-align StatsAreaGraps'>
                <AreaGraphCard
                    countH1={'95%'}
                    percentage={'20%'}
                    number={'24%'}
                    heading='% Workers Passing Quiz'
                    graph_color={'#018E42'}
                    bg={'rgba(1, 142, 66, 0.1)'}
                />
            </div>
            <div className='StatsAreaGraps'>
                <AreaGraphCard
                    countH1={'6'}
                    percentage={'20%'}
                    number={'3'}
                    heading='Avg. Days Taken'
                    graph_color={'#018E42'}
                    bg={'rgba(1, 142, 66, 0.1)'}
                />
            </div>
        </div>
    )
}

export default StatsAreaGraps