import React from 'react';

const Card = () => {
    return (
        <div className='bg-blue-lighter p-6 rounded-lg'>
            <div className='flex-col'>
                <p className='text-center'>15.01.2021</p>
                <div className='flex justify-center items-center'>
                    <img src='http://openweathermap.org/img/wn/10d@2x.png' alt=''></img>
                </div>
            </div>
            <div className='flex justify-between'>
                <span>22°C</span>
                <span>26°C</span>
            </div>
        </div>
    )
};

export default Card;
