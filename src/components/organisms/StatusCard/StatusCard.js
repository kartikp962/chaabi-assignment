import React from 'react'
import './StatusCard.css'
import Pichart from '../../molecules/Pichart/Pichart'
const StatusCard = () => {
    return (
        <div className='StatusCard'>
            <p className='graph-title'>Chapter Wise Status</p>
            <Pichart />
            <div className='statusCard-details'>
                <div className='flex-align gap-5'><div style={{ background: '#0D62FF' }} className='round-pill'></div> <p>Finished Training</p> </div>
                <div className='flex-align gap-5'><div style={{ background: 'rgba(51, 51, 51, 0.30)' }} className='round-pill'></div> <p>Chapter A</p> </div>
                <div className='flex-align gap-5'><div style={{ background: '#8400D5' }} className='round-pill'></div> <p>Chapter B</p> </div>
                <div className='flex-align gap-5'><div style={{ background: '#425F57' }} className='round-pill'></div> <p>Chapter C</p> </div>
                <div className='flex-align gap-5'><div style={{ background: '#ED1C24' }} className='round-pill'></div> <p>Haven’t Started Yet</p> </div>
            </div>
        </div>
    )
}

export default StatusCard