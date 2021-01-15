import React from 'react';

const LeftAside = ({ toggle, setToggle }) => {
    const buttonHandler = () => {
        setToggle(!toggle);
    };

    return (
        <div className={toggle ? 'hidden' : ''}>
            <div className='flex-col'>
                <div className='flex'>
                    <button className='bg-light-gray text-white mt-10 ml-10 rounded-md p-3 outline-none' onClick={buttonHandler}>Enter a city name</button>
                </div>
                <div className='flex flex-col justify-start items-center h-full'>
                    <img src='http://openweathermap.org/img/wn/10d@4x.png' alt='' />
                    <p>
                        <span className='font-extrabold text-white text-7xl'>26</span>
                        <span className='text-gray-400 text-3xl'>°C</span>
                    </p>
                    <p className='text-gray-50 font-bold mt-5 text-3xl'>Clear</p>
                    <p className='text-gray-50 font-bold mt-5 text-2xl'>Today</p>

                    <div className='flex justify-center items-center'>
                        <p className='text-gray-400 font-bold text-2xl mt-5'>
                            <i className='material-icons'>location_on</i>London
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LeftAside;
