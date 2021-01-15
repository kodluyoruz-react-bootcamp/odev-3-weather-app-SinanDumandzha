import React from 'react';

const MinCard = () => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-4'>
            <div className='flex-col text-center'>
                <p>Min</p>
                <div className='flex justify-center items-center p-3'>
                    <span className='text-5xl font-bold'>
                        12
                        <span className='ml-2 text-gray-300'>°</span>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default MinCard;
