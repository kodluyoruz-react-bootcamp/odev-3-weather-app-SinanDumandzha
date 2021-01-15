import React from 'react';

import Card from '../Card/Card';
import HumidityCard from '../HumidityCard/HumidityCard';
import MinCard from '../MinCard/MinCard';
import MaxCard from '../MaxCard/MaxCard';
import WindCard from '../WindCard/WindCard';

const RightAside = () => {
    return (
        <>
            <div className='flex-col justify-center items-center text-white'>
                <div className='flex justify-start items-center mt-3 ml-4'>
                    <p className='text-4xl font-bold'>Today's Highlights</p>
                </div>

                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 m-2 mb-6'>
                    <MinCard />
                    <MaxCard />
                    <WindCard />
                    <HumidityCard />
                </div>

                <div className='flex justify-start items-center mt-1 ml-4'>
                    <p className='text-4xl font-bold'>Upcoming Days</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mt-3 gap-2 p-2'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
};

export default RightAside;
