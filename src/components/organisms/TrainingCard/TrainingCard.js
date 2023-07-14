import React from 'react'
import './TrainingCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrainingCard = () => {
    return (
        <div className='TrainingCard'>
            <p className='graph-title'>Monthly Training Activity</p>
            
            <p> <FontAwesomeIcon icon="fa-sharp fa-light fa-arrow-up" size="sm" style={{color: "#018e42",}} /><span>16% more enrollees this month</span> </p>
            <div className='activities'>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course a</h3>
                        <small>23 Workers Took This Course This Week</small>
                    </div>
                    <div className='verticle-line'></div>
                </div>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course b</h3>
                        <small>253 Workers Took This Course This Week</small>
                    </div>
                    <div className='verticle-line'></div>
                </div>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course c</h3>
                        <small>253 Workers Took This Course This Week</small>
                    </div>
                    <div className='verticle-line'></div>
                </div>
                <div className='flex-align gap-10 activity'>
                    <div className='blue-round'></div>
                    <div className='activity-detail'>
                        <h3>course d</h3>
                        <small>253 Workers Took This Course This Week</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingCard