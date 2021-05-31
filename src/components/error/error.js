import React from 'react';
import './error.css';
import img from './error.jpg';
const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='err'></img>
            <span> Somethisng goes wrong</span>
        </>
    )
}

export default ErrorMessage;