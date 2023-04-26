import React from 'react';
import Navbar from '../components/Navbar';

const Base = (props) => {
    return (
        <div className='bg-gray-400 min-h-screen pb-4' >
            <Navbar/> 
            {props.children}
        </div>
    );
};

export default Base;