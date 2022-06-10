import React from 'react'

const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1 w-full bg-gray-300 rounded-full'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full rounded-md ${
                    progressPercentage < 70 ? 'bg-orange-600' : 'bg-orange-600'}`}>
            </div>
        </div>
    );
};

export default ProgressBar