import React from 'react';
import Navbar from '../components/Navbar';

const Base = (props) => {
    return (
        <div>
            <Navbar/> 
            {props.children}
        </div>
    );
};

export default Base;